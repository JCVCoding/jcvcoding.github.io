import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
  HeaderContainer,
  LogoLinkContainer,
  HeaderLinkContainer,
  ContactLink,
  WorkLink,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoLinkContainer to="/">
      <Logo />
    </LogoLinkContainer>
    <HeaderLinkContainer>
      <WorkLink to="/work">Work</WorkLink>
      <ContactLink to="/contact">Contact</ContactLink>
    </HeaderLinkContainer>
  </HeaderContainer>
);

export default Header;
