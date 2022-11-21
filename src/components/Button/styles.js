import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 2rem;

  button {
    width: 70%;
    height: 2rem;
    background-color: ${colors.quaternary};
    color: ${colors.tertiary};
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
  }
`;
