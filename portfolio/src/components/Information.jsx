import React, { Component } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Start from "./Start";
import Content from "./Content";
import Header from "./Header";
import "../stylesheets/Information.css";

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
            <Content></Content>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    );
  }
}
