import React from "react";
import ProjectsContentDesktop from "./ProjectsContentDesktop";
import ProjectsContentMobile from "./ProjectsContentMobile";

function Projects(props) {
  return (
    <div>
      {props.isDesktop ? <ProjectsContentDesktop /> : <ProjectsContentMobile />}
    </div>
  );
}

export default Projects;
