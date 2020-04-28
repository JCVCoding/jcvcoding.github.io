import React from "react";

import { GitHub, LinkedIn } from "./socialBar.links";

import {
  SocialContainer,
  SocialLink,
  SocialLinkContainer,
} from "./socialBar.styles";

const SocialBar = () => (
  <SocialContainer>
    <SocialLinkContainer>
      <SocialLink href={LinkedIn} target="_blank">
        LinkedIn
      </SocialLink>
      <SocialLink href={GitHub} target="_blank">
        GitHub
      </SocialLink>
    </SocialLinkContainer>
  </SocialContainer>
);

export default SocialBar;
