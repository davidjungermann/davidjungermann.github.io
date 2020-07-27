import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Start from "./Start";
import About from "./About";
import Header from "./Header";
import "../stylesheets/Layout.css";
import Projects from "./Projects";

export default function Layout() {
  return (
    <div className="fullpage-wrap">
      <Fullpage>
        <FullPageSections>
          <FullpageSection
            style={{
              backgroundColor: "#D8DEE9",
              height: "100vh",
            }}
          >
            <Header></Header>
            <Start></Start>
          </FullpageSection>
          <FullpageSection>
            <About></About>
          </FullpageSection>
          <FullpageSection>
            <Projects></Projects>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}
