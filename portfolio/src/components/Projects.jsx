import React from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import WebCard from "./WebCard";
import "../stylesheets/Content.css";

function Projects() {
  return (
    <FullpageSection>
      <div className="content">
        <div className="container">
          <div className="info-body">
            <h1 className="content-heading">Projects</h1>
            <div className="row">
              <WebCard
                title="Vote couting application"
                link="https://github.com/davidjungermann/voting-vg"
              >
                Application used for electronic voting. Used for generating
                results from votings made in Google Forms. Built in React, uses
                ExcelJS and Firebase.
              </WebCard>

              <WebCard
                title="Personal website"
                link="https://github.com/davidjungermann/davidjungermann.github.io"
              >
                Portfolio, which happens to be this very page! Built in React
                and hosted on Github Pages.
              </WebCard>

              <WebCard
                title="Message board forum"
                link="https://github.com/davidjungermann/EDAF90-project"
              >
                Forum mock up, with real-time updating, and database storage.
                Built in Angular, uses Firestore.
              </WebCard>
            </div>

            <div className="row">
              <WebCard
                title="API and database implementation"
                link="https://github.com/davidjungermann/EDAF75-Project"
              >
                REST API with corresponding database that models production of
                cookies. Built in Java, using Spark, and SQLite.
              </WebCard>

              <WebCard
                title="Object oriented programming"
                link="https://github.com/davidjungermann/EDAF60"
              >
                Two projects that implement OOP principles. Built in Java.
              </WebCard>

              <WebCard
                title="Web security"
                link="https://github.com/davidjungermann/EITN41"
              >
                Mini-projects concerning web security, including payments,
                electronic voting and cybersecurity. Written in Python.
              </WebCard>
            </div>
          </div>
        </div>
      </div>
    </FullpageSection>
  );
}

export default Projects;
