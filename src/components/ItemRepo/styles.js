import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 80%;

  h3 {
    font-size: 2rem;
    font-weight: 400;
    color: #fdfffc;
  }

  p {
    margin-top: 0.75rem;
    font-size: 1rem;
    color: #fdfffc;
  }

  a {
    color: #fdfffc;
    text-decoration: none;
    margin-top: 0.75rem;
  }

  a.remove {
    color: #f0f;
  }
`;
