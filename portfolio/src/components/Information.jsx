import React, { Component } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Start from "./Start";
import About from "./About";
import Header from "./Header";
import "../stylesheets/Information.css";
import Projects from "./Projects";

export default class App extends Component {
  render() {
    return (
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
    );
  }
}
