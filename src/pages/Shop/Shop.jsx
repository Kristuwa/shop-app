const Shop = ({
  handleAddToCart,
  shopList,
  shopProducts,
  handleChooseShop,
}) => {
  return (
    <main>
      {shopList.length > 0 && (
        <ul>
          {shopList.map(({ _id, name }) => (
            <li key={_id}>
              <button type="button" onClick={() => handleChooseShop(name)}>
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
