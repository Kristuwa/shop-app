import { Button, CardContainer, CardTitle, Image } from "./ProductItem.styled";

export const ProductItem = ({ name, photo, handleAddToCart, id }) => {
  return (
    <CardContainer>
      <Image src={photo} alt={name} width={200} height={100} />
      <CardTitle>{name}</CardTitle>
      <Button type="button" onClick={() => handleAddToCart(id)}>
        Add to cart
      </Button>
    </CardContainer>
  );
};
