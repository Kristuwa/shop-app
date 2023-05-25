import { ProductItem } from "../../components/ProductItem/ProductItem";
import { ShopItem } from "../../components/ShopItem/ShopItem";
import { Message } from "../ShoppingCart/ShoppingCart.styled";
import { ButtonsList, ProductsList, Section } from "./Shop.styled";

const Shop = ({
  handleAddToCart,
  shopList,
  shopProducts,
  handleChooseShop,
  error,
  loading,
  activeButton,
  cart
}) => {
  return (
    <main>
      {shopList.length > 0 && !error && !loading && (
        <Section>
          <ButtonsList>
            {shopList.map(({ _id, name }) => (
              <ShopItem
                key={_id}
                name={name}
                handleChooseShop={handleChooseShop}
                activeButton={activeButton}
					 cart={cart}
              />
            ))}
          </ButtonsList>
          {shopProducts?.length > 0 && !error && !loading && (
            <ProductsList>
              {shopProducts.map(({ id, name, photo, price }) => (
                <ProductItem
                  name={name}
                  photo={photo}
                  price={price}
                  handleAddToCart={handleAddToCart}
                  key={id}
                  id={id}
                />
              ))}
            </ProductsList>
          )}
        </Section>
      )}
      {!error && loading && <Message>Loading....</Message>}
      {error && !loading && <Message>{error}</Message>}
    </main>
  );
};

export default Shop;
