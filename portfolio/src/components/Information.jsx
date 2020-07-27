import React, { Component } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Header from "./Header";
import Content from "./Content";
import Links from "./Links";
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
            <Links></Links>
            <Header></Header>
          </FullpageSection>

          <FullpageSection>
            <Content></Content>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    );
  }
}
