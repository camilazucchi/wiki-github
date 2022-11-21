import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { colors } from "../../styles/colors";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  margin-top: 1rem;
  width: 80%;
  padding: 1rem;
  background-color: ${colors.secondary};

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${colors.quaternary};
  }

  p {
    margin-top: 0.75rem;
    font-size: 1rem;
    color: ${colors.tertiary};
  }

  a {
    margin-top: 0.45rem;
    color: ${colors.tertiary};
    font-weight: bold;
    text-decoration: none;
  }

  a.remove {
    font-weight: bold;
    color: ${colors.quaternary};
  }

  @media ${device.mobileS} { 
    width: 80%;

    h3, a {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }

    @media ${device.laptop} {
      width: 50%;

      p {
        font-size: 1rem;
      }
    }

    @media ${device.laptopL} {
      width: 40%;

      h3 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.4rem
      }

      a {
        font-size: 1.3rem;
      }
    }

    @media ${device.desktop} {
      width: 30%;

      h3 {
        font-size: 1.5rem;
      }

      p, a {
        font-size: 1rem;
    }
  }
`;
