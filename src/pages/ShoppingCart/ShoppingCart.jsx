// import { CardItem } from "../../components/CardItem/CardItem";
// import axios from "axios";
import { useState } from "react";
import { ButtonBack, List, Message } from "./ShoppingCart.styled";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { useLocation } from "react-router-dom";

function ShoppingCart({ list }) {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const backLinkHref = location.state?.from ?? "/";

  return (
    <main>
      {list.length > 0 && !error && !loading && (
        <>
          <ButtonBack to={backLinkHref}>
            <HiOutlineArrowCircleLeft /> Back
          </ButtonBack>

          <List>
            {list.map(({ id, name, photo, count, price }) => (
              <li key={id}>
                <img src={photo} alt={name} />
                <p>{name}</p>
                <p>Counter: {count}</p>
                <p>Price: {count * price}</p>
              </li>
            ))}
          </List>
        </>
      )}
      {!error && loading && <Message>Loading....</Message>}
      {error && !loading && <Message>{error}</Message>}
    </main>
  );
}

export default ShoppingCart;
