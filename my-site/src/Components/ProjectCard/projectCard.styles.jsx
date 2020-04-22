import styled, { css } from "styled-components";

export const ProjectCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  height: 40rem;
  width: 60rem;
  padding: 5rem 2rem;
  margin: 3rem;
  background-color: lightcoral;
`;

export const ProjectPhoto = styled.div`
  border: 2px solid black;
`;

export const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const DescriptionStyles = css`
  text-align: center;
`;

export const ProjectDescription = styled.p`
  ${DescriptionStyles}
`;
export const ProjectTitle = styled.h2`
  ${DescriptionStyles}
`;
