import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr minmax(2rem, 12rem);
  height: 4rem;
  padding: 2rem 1rem;
  justify-content: center;
`;

export const FooterText = styled.div`
  grid-column: 1 / 2;
  font-size: 0.6rem;
  justify-self: flex-start;
  align-self: center;
  margin-left: 1rem;
`;

export const FooterLinkContainer = styled.div`
  grid-column: 3 / 4;
  display: flex;
  justify-content: space-evenly;
`;

const FooterLinkStyles = css`
  font-size: 0.8rem;
`;

export const FooterLink = styled.a`
  ${FooterLinkStyles}
`;
