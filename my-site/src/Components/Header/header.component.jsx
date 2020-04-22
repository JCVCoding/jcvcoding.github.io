import React from "react";
import {
  HeaderContainer,
  LogoLinkContainer,
  HeaderLinkContainer,
  HeaderLink,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoLinkContainer to="/">JOSHUA VLADIA</LogoLinkContainer>
    <HeaderLinkContainer>
      <HeaderLink to="/projects">Projects</HeaderLink>
      <HeaderLink to="/contact">Contact</HeaderLink>
    </HeaderLinkContainer>
  </HeaderContainer>
);

export default Header;
