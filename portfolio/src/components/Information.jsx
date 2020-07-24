import React, { Component } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Header from "./Header";
import "../stylesheets/Information.css"

export default class App extends Component {
  render() {
    return (
      <Fullpage>
        <FullPageSections>
          <div className="d-container">
            <FullpageSection
              style={{
                backgroundColor: "#D8DEE9",
                height: "100vh",
              }}
            >
              <Header></Header>
            </FullpageSection>
          </div>
          <FullpageSection>2</FullpageSection>
          <FullpageSection>3</FullpageSection>
        </FullPageSections>
      </Fullpage>
    );
  }
}
