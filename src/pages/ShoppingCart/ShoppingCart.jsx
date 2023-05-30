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
import { Map } from "../../components/Map/Map";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

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
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    toast.success(JSON.stringify(navigator.geolocation));
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  }, []);

  const total = useMemo(
    () =>
      list.reduce((acc, { price, count }) => {
        acc += price * count;
        return acc;
      }, 0),
    [list]
  );

  return (
    <main>
      <section>
        <ButtonBack to={backLinkHref}>
          <HiOutlineArrowCircleLeft /> Back
        </ButtonBack>
        <MainContainer>
          <div>
            <Map setPosition={setPosition} position={position} />
            <Form
              addOder={addOder}
              list={list}
              position={position}
              setPosition={setPosition}
            />
          </div>

          {list.length > 0 && !error && !loading && (
            <>
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
              <p>Total price: {total}</p>
            </>
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
