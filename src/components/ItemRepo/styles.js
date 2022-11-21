import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
`;
