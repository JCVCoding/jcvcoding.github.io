import React from "react";

import {
  ProjectCardContainer,
  ProjectDescription,
  ProjectPhoto,
  ProjectTitle,
  ProjectDescriptionContainer,
} from "./projectCard.styles";

const ProjectCard = () => (
  <ProjectCardContainer>
    <ProjectPhoto>Project Photo</ProjectPhoto>
    <ProjectDescriptionContainer>
      <ProjectTitle>Project Title</ProjectTitle>
      <ProjectDescription>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic unde culpa
        dolorem reprehenderit quae impedit perspiciatis aliquid asperiores
        exercitationem, in animi et voluptate ad consequuntur? Eveniet eos
        blanditiis consectetur earum!
      </ProjectDescription>
    </ProjectDescriptionContainer>
  </ProjectCardContainer>
);

export default ProjectCard;
