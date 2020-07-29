import React from "react";
import Fullpage, { FullPageSections } from "@ap.cx/react-fullpage";
import Start from "./Start";
import About from "./About";
import "../stylesheets/Layout.css";
import Projects from "./Projects";

export default function Layout() {
  return (
    <div className="fullpage-wrap">
      <Fullpage>
        <FullPageSections>
          <Start />
          <About />
          <Projects />
        </FullPageSections>
      </Fullpage>
    </div>
  );
}
