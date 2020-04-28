import styled from "styled-components";

export const ProjectPageContainer = styled.div`
  grid-area: content;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  scroll-behavior: smooth;
`;
