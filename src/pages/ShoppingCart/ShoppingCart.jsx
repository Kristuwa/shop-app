import {
  ButtonBack,
  List,
  MainContainer,
  Message,
} from "./ShoppingCart.styled";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { CartProductItem } from "../../components/CartProductItem/CartProductItem";
import { Form } from "../../components/Form/Form";

function ShoppingCart({
  list,
  handleDelete,
  handleDecrement,
  handleIncrement,
  addOder,
  loading,
  error,
}) {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";

  return (
    <main>
      <section>
        <ButtonBack to={backLinkHref}>
          <HiOutlineArrowCircleLeft /> Back
        </ButtonBack>
        <MainContainer>
          <Form addOder={addOder} list={list} />
          {list.length > 0 && !error && !loading && (
            <List>
              {list.map(({ id, name, photo, count, price }) => (
                <CartProductItem
                  key={id}
                  id={id}
                  name={name}
                  photo={photo}
                  count={count}
                  price={price}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                  handleDelete={handleDelete}
                />
              ))}
            </List>
          )}
          {list.length === 0 && !error && !loading && (
            <Message>Your shopping cart is empty</Message>
          )}
          {!error && loading && <Message>Loading....</Message>}
          {error && !loading && <Message>{error}</Message>}
        </MainContainer>
      </section>
    </main>
  );
}

export default ShoppingCart;
