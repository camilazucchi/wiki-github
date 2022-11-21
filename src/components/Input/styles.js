import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { colors } from "../../styles/colors";

export const InputContainer = styled.div`
  height: 1.875rem;
  width: 80%;
  margin: 1rem;
  border: 0.063rem solid ${colors.secondary};
  border-radius: 1.25rem;

  input {
    height: 1.875rem;
    width: 100%;
    text-align: center;
    background: transparent;
    border: none;
    border-radius: 1.25rem;
    font-size: 1rem;
    color: ${colors.tertiary};
  }

  textarea:focus,
  input:focus {
    outline: none;
    border: 0.063rem solid ${colors.tertiary};
  }

  @media ${device.mobileS}, @media ${device.laptop} {
    width: 50%;
  }

  @media ${device.laptopL} {
    width: 40%;
  }

  @media ${device.laptopL} {
    width: 35%;
  }
`;
