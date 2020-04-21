import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr 33%;
  height: 4rem;
  padding: 2rem 1rem;
  justify-content: center;
`;

export const LogoLinkContainer = styled(Link)`
  grid-column: 1 / 2;
  background-image: url("../../../public/logo192.png");
  color: black;
`;

export const HeaderLinkContainer = styled.div`
  grid-column: 3 / 4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderLinkStyles = css`
  text-decoration: none;
  font-size: 1.5rem;
`;

export const WorkLink = styled(Link)`
  ${HeaderLinkStyles}
`;

export const ContactLink = styled(Link)`
  ${HeaderLinkStyles}
`;
