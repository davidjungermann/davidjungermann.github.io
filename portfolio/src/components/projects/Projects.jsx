import React from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import ProjectsContentDesktop from "./ProjectsContentDesktop";
import ProjectsContentMobile from "./ProjectsContentMobile";

function Projects(props) {
  return (
    <FullpageSection>
      {props.isDesktop ? <ProjectsContentDesktop /> : <ProjectsContentMobile />}
    </FullpageSection>
  );
}

export default Projects;
