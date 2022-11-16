import styled from "styled-components";

export const InputContainer = styled.div`
  height: 1.875rem;
  width: 80%;
  margin: 1rem;
  border: 0.063rem solid #dad7cd;
  border-radius: 1.25rem;

  input {
    height: 1.875rem;
    width: 100%;
    text-align: center;
    background: transparent;
    border: none;
    border-radius: 1.25rem;
    font-size: 1rem;
    color: #dad7cd;
  }

  textarea:focus, input:focus {
    outline: none;
  }
`;
