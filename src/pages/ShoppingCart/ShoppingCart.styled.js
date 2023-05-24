import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.accentColor};
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  margin-bottom: 20px;
`;

export const LoadMore = styled.button`
  display: block;
  width: 216px;
  height: 50px;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;

  margin-left: auto;
  margin-right: auto;

  color: ${(props) => props.theme.color.secondaryColor};
  background-color: ${(props) => props.theme.color.bgBtn};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.color.accentColor};
  }
`;

export const Message = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;

  margin-top: 150px;
`;
