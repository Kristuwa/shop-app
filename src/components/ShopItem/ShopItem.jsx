import { ButtonShop } from "./ShopItem.styled";

export const ShopItem = ({ name, activeButton, handleChooseShop, cart }) => {
  return (
    <li>
      <ButtonShop
        active={name === activeButton ? "active" : null}
        disabled={name !== activeButton && cart.length > 0}
        type="button"
        onClick={() => handleChooseShop(name)}
      >
        {name}
      </ButtonShop>
    </li>
  );
};
