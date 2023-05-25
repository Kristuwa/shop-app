import styled from "styled-components";

export const ButtonShop = styled.button`
  display: block;
  width: 196px;
  height: 50px;

  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;

  color: ${(props) => props.theme.color.secondaryColor};
  background-color: ${(props) =>
    props.active === "active"
      ? props.theme.color.accentColor
      : props.theme.color.bgBtn};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.active === "active"
        ? props.theme.color.bgBtn
        : props.theme.color.accentColor};
  }
`;
