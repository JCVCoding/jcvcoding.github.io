import React from "react";

import { GitHub, LinkedIn } from "./footer.links";

import {
  FooterContainer,
  FooterLink,
  FooterLinkContainer,
  FooterText,
} from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <FooterText>CREATED BY JOSH VLADIA 2020</FooterText>
    <FooterLinkContainer>
      <FooterLink href={LinkedIn} target="_blank">
        LinkedIn
      </FooterLink>
      <FooterLink href={GitHub} target="_blank">
        GitHub
      </FooterLink>
    </FooterLinkContainer>
  </FooterContainer>
);

export default Footer;
