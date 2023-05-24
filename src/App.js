import { theme } from "./utils/theme";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import axios from "axios";
import { useState, useEffect } from "react";

const ShoppingCart = lazy(() => import("./pages/ShoppingCart/ShoppingCart"));
const Shop = lazy(() => import("./pages/Shop/Shop"));

function App() {
  const [shopList, setShopList] = useState([]);
  const [activeShop, setActiveShop] = useState("MCDonald's");
  const [shopProducts, setShopProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);
  const BASE_URL = "https://backend-shop-s5w1.onrender.com/api/shops";

  useEffect(() => {
    const getShops = async () => {
      const result = await axios.get(BASE_URL);
      const { data } = result.data;
      const shops = data.result;
      console.log(shops);

      setShopList(shops);
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
      setCart((prevState) => {
        return prevState.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
      });
    }
  };

  const handleChooseShop = (name) => {
    setActiveShop(name);
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
              />
            }
          />
          <Route path="/shoppingCart" element={<ShoppingCart list={cart} />} />
          <Route
            path="*"
            element={
              <Shop
                handleAddToCart={handleAddToCart}
                shopProducts={shopProducts}
                shopList={shopList}
                handleChooseShop={handleChooseShop}
              />
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
