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
              />
            ))}
          </ButtonsList>
          {shopProducts?.length > 0 && !error && !loading && (
            <ProductsList>
              {shopProducts.map(({ id, name, photo }) => (
                <ProductItem
                  name={name}
                  photo={photo}
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
