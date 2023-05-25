import {
  Button,
  CardContainer,
  CardTitle,
  Image,
} from "../ProductItem/ProductItem.styled";
import {
  ButtonCounter,
  CounterContainer,
  Text,
} from "./CartProductItem.styled";
import { RiAddFill } from "react-icons/ri";
import { HiMinus } from "react-icons/hi";

export const CartProductItem = ({
  id,
  name,
  photo,
  count,
  price,
  handleDecrement,
  handleIncrement,
  handleDelete,
}) => {
  return (
    <CardContainer>
      <Image src={photo} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CounterContainer>
        <Text>Counter: {count}</Text>
        <ButtonCounter
          type="button"
          onClick={() => handleDecrement(id)}
          aria-label="decrement"
        >
          <HiMinus />
        </ButtonCounter>
        <ButtonCounter
          type="button"
          onClick={() => handleIncrement(id)}
          aria-label="increment"
        >
          <RiAddFill />
        </ButtonCounter>
      </CounterContainer>
      <Text>Price: {count * price}</Text>
      <Button type="button" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </CardContainer>
  );
};
