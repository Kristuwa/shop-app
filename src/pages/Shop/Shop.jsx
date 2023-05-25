import { Message } from "../ShoppingCart/ShoppingCart.styled";

const Shop = ({
  handleAddToCart,
  shopList,
  shopProducts,
  handleChooseShop,
  error,
  loading,
}) => {
  return (
    <main>
      {shopList.length > 0 && !error && !loading && (
        <>
          <ul>
            {shopList.map(({ _id, name }) => (
              <li key={_id}>
                <button type="button" onClick={() => handleChooseShop(name)}>
                  {name}
                </button>
              </li>
            ))}
          </ul>
          {shopProducts.length > 0 && !error && !loading && (
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
          )}
        </>
      )}
      {!error && loading && <Message>Loading....</Message>}
      {error && !loading && <Message>{error}</Message>}
    </main>
  );
};

export default Shop;
