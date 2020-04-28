import styled, { css } from "styled-components";

export const SocialContainer = styled.div`
  grid-area: sidebar;

  display: grid;
  grid-template-rows: 40% 1fr minmax(2rem, 12rem);
  height: 100%;
  width: 4rem;
  padding: 2rem 1rem;
  align-self: flex-end;
`;

export const SocialLinkContainer = styled.div`
  grid-row: 1 / -1;
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
