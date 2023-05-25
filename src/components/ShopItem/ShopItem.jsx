import { ButtonShop } from "./ShopItem.styled";

export const ShopItem = ({ name, activeButton, handleChooseShop }) => {
  return (
    <li>
      <ButtonShop
        active={name === activeButton ? "active" : null}
        type="button"
        onClick={() => handleChooseShop(name)}
      >
        {name}
      </ButtonShop>
    </li>
  );
};
