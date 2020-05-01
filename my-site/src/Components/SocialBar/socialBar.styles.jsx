import styled, { css } from "styled-components";

export const SocialContainer = styled.div`
  grid-area: sidebar;

  /* display: grid;
  grid-template-rows: 40% 1fr minmax(2rem, 12rem); */
  display: flex;
  justify-content: center;
  height: 100%;
  width: 4rem;
  padding: 2rem 1rem;
`;

export const SocialLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SocialLinkStyles = css`
  font-size: 0.8rem;
`;

export const SocialLink = styled.a`
  ${SocialLinkStyles}
  &:last-child {
    margin-top: 1.5rem;
  }
`;

export const SocialLinkIcon = styled.svg`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  stroke-width: 0;
  stroke: black;
  fill: black;
`;
