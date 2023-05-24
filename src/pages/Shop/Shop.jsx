import axios from "axios";
import { useState, useEffect } from "react";

const Shop = () => {
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

  return (
    <main>
      {shopList.length > 0 && (
        <ul>
          {shopList.map(({ _id, name }) => (
            <li key={_id}>
              <button
                type="button"
                onClick={() => {
                  setActiveShop(name);
                }}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      )}
      <ul>
        {shopProducts.map(({ id, name, photo }) => (
          <li key={id}>
            <img src={photo} alt={name} />
            <p>{name}</p>
            <button type="button" onClick={() => handleAddToCart(id)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Shop;
