import { theme } from "./utils/theme";
import { lazy, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "./utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingCart = lazy(() => import("./pages/ShoppingCart/ShoppingCart"));
const Shop = lazy(() => import("./pages/Shop/Shop"));

function App() {
  const [shopList, setShopList] = useState([]);
  const [activeShop, setActiveShop] = useState("MCDonald's");
  const [shopProducts, setShopProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const storageCart = localStorage.getItem("cart");
    return storageCart ? JSON.parse(storageCart) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getShops = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${BASE_URL}/shops`);
        const { data } = result.data;
        const shops = data.result;

        setShopList(shops);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getShops();
  }, []);

  useEffect(() => {
    if (shopList.length > 0) {
      const chooseShop = shopList.find(({ name }) => name === activeShop);
      const { products } = chooseShop;
      setShopProducts(products);
    }
  }, [setShopProducts, activeShop, shopList]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = useCallback(
    (id) => {
      const newProduct = shopProducts.find((product) => product.id === id);

      const index = cart.findIndex((product) => product.id === id);
      if (index === -1) {
        setCart((prevState) => [...prevState, { ...newProduct, count: 1 }]);
      } else {
        setCart((prevState) =>
          prevState.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
          )
        );
      }
    },
    [cart, shopProducts]
  );

  const handleChooseShop = useCallback((name) => {
    setActiveShop(name);
  }, []);

  const handleDelete = useCallback((id) => {
    setCart((prevState) => prevState.filter((product) => product.id !== id));
  }, []);

  const handleIncrement = useCallback((id) => {
    setCart((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  }, []);

  const handleDecrement = useCallback(
    (id) => {
      const product = cart.find((product) => product.id === id);
      if (product.count > 1) {
        setCart((prevState) =>
          prevState.map((item) =>
            item.id === id ? { ...item, count: item.count - 1 } : item
          )
        );
      } else {
        setCart((prevState) =>
          prevState.filter((product) => product.id !== id)
        );
      }
    },
    [cart]
  );

  const addOder = useCallback(async (formValues, list) => {
    setLoading(true);
    try {
      if (list.length > 0) {
        const newOrder = { ...formValues, products: list };

        await axios.post(`${BASE_URL}/orders`, newOrder);
        setLoading(false);
        setError(null);
        setCart([]);
        toast.success("You have successfully submitted your order");
      } else {
        setLoading(false);
        toast.warn("Please, add products to cart");
        return;
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        icon={false}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Shop
                handleAddToCart={handleAddToCart}
                shopProducts={shopProducts}
                shopList={shopList}
                handleChooseShop={handleChooseShop}
                error={error}
                loading={loading}
                activeButton={activeShop}
                cart={cart}
              />
            }
          />
          <Route
            path="/shoppingCart"
            element={
              <ShoppingCart
                list={cart}
                handleDelete={handleDelete}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                addOder={addOder}
                error={error}
                loading={loading}
              />
            }
          />
          <Route
            path="*"
            element={
              <Shop
                handleAddToCart={handleAddToCart}
                shopProducts={shopProducts}
                shopList={shopList}
                handleChooseShop={handleChooseShop}
                error={error}
                loading={loading}
              />
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
