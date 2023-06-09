import { Button, CardContainer, CardTitle, Image } from "./ProductItem.styled";

export const ProductItem = ({ name, photo, price, handleAddToCart, id }) => {
  return (
    <CardContainer>
      <Image src={photo} alt={name} width="200px" height="150px" />
      <CardTitle>{name}</CardTitle>
      <CardTitle>Price: {price}</CardTitle>
      <Button type="button" onClick={() => handleAddToCart(id)}>
        Add to cart
      </Button>
    </CardContainer>
  );
};
