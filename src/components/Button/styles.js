import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { colors } from "../../styles/colors";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;

  button {
    width: 70%;
    background-color: ${colors.quaternary};
    color: ${colors.tertiary};
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
  }

  @media ${device.mobileS}, @media ${device.laptop}{
      width: 70%;
      
      button {
        width: 70%;
      }
    }

    @media ${device.laptopL} {
      width: 50%;
      height: 2rem;
      margin: 1rem 0;

      button {
        width: 50%;
        font-size: 1.5rem;
        height: 2.5rem;
      }
    }

    @media ${device.laptopL} {
      width: 50%;

      button {
        width: 50%;
        font-size: 1.5rem;
      }
    }
`;
