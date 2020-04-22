import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  background-color: lightcyan;
  border: 2px solid black;
  width: 18rem;
  height: 3rem;
  transition: background-color 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  :hover {
    background-color: purple;
    transition: background-color 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;
