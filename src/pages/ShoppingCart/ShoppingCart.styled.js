import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonBack = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.color.secondaryColor};

  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  text-decoration: none;
  margin-bottom: 20px;

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.accentColor};
  }
`;

export const MainContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;

  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
`;
