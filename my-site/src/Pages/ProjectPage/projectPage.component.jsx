import React from "react";

import ProjectCard from "../../Components/ProjectCard/projectCard.component";

import { ProjectPageContainer } from "./projectPage.styles";

const ProjectPage = () => (
  <ProjectPageContainer>
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </ProjectPageContainer>
);

export default ProjectPage;
