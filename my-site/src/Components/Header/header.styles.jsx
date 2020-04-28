import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  grid-area: header;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 4rem;
  padding: 2rem 1rem;
  justify-content: center;
  font-size: 1.5rem;
`;

export const LogoLinkContainer = styled(Link)`
  grid-column: 1 / 2;
`;

export const HeaderLinkContainer = styled.div`
  grid-column: 3 / 4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderLinkStyles = css`
  font-size: 1em;
`;

export const HeaderLink = styled(Link)`
  ${HeaderLinkStyles}
`;
