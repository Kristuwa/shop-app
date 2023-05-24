import { Link, Navigate } from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <Navigate>
        <Link to="/" end>
          Shop
        </Link>
        <Link to="/shoppingCart">Shopping Cart</Link>
      </Navigate>
    </header>
  );
};
