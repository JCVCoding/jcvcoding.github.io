import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 2rem 6rem;
  width: 60rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;

  button {
    margin-top: 1rem;
  }
`;

export const FormTitle = styled.h3`
  grid-column: 1 / 3;
  justify-self: center;
`;
