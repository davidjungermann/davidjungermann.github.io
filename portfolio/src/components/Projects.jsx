import React, { useState, useEffect } from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import ProjectsContentDesktop from "./ProjectsContentDesktop";
import ProjectsContentMobile from "./ProjectsContentMobile";
import "../stylesheets/Projects.css";

function Projects() {
  const [isDesktop, setDesktop] = useState(
    window.innerWidth > 1024 && window.innerHeight > 768
  );

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <FullpageSection>
      {isDesktop ? <ProjectsContentDesktop /> : <ProjectsContentMobile />}
    </FullpageSection>
  );
}

export default Projects;
