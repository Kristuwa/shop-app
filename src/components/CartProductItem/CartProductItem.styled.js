import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const ButtonCounter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 25px;

  font-family: inherit;
  font-weight: 600;
  font-size: 20px;

  color: ${(props) => props.theme.color.secondaryColor};
  background-color: transparent;
  border-radius: 5px;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.color.accentColor};
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 10px;
`;
