import { theme } from "./utils/theme";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import axios from "axios";
import { useState, useEffect } from "react";

const ShoppingCart = lazy(() => import("./pages/ShoppingCart/ShoppingCart"));
const Shop = lazy(() => import("./pages/Shop/Shop"));

export const BASE_URL = "https://backend-shop-s5w1.onrender.com/api";

function App() {
  const [shopList, setShopList] = useState([]);
  const [activeShop, setActiveShop] = useState("MCDonald's");
  const [shopProducts, setShopProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getShops = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${BASE_URL}/shops`);
        const { data } = result.data;
        const shops = data.result;
        console.log(shops);

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

  const handleAddToCart = (id) => {
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
  };

  const handleChooseShop = (name) => {
    setActiveShop(name);
  };

  const handleDelete = (id) => {
    setCart((prevState) => prevState.filter((product) => product.id !== id));
  };

  const handleIncrement = (id) => {
    setCart((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    const product = cart.find((product) => product.id === id);
    if (product.count > 1) {
      setCart((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
      );
    } else {
      setCart((prevState) => prevState.filter((product) => product.id !== id));
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
