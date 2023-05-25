import styled from "styled-components";

export const CardContainer = styled.li`
  width: 240px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  margin-bottom: 10px;
  width:200px;
  heigth: 100px;
`;

export const CardTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  display: block;
  width: 100px;
  height: 30px;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;

  margin-left: auto;

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
