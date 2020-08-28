import React from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import "../stylesheets/Content.css";

function Projects() {
  return (
    <FullpageSection>
      <div className="content">
        <div className="container">
          <div className="info-body">
            <h1 className="content-heading">Projects</h1>
            <div className="row">
              <div className="col-sm">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Voting system</h5>
                    <p className="card-text">
                      Application used for electronic voting. Used for
                      generating results from votings made in Google Forms.
                      Built in React, uses ExcelJS and Firebase.
                    </p>
                    <a
                      href="https://github.com/davidjungermann/voting-vg"
                      className="card-link"
                    >
                      Source
                    </a>
                    <a
                      href="https://davidjungermann.com/voting-vg"
                      className="card-link"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Personal website</h5>
                    <p className="card-text">
                      Portfolio, which happens to be this very page! Built in
                      React and hosted on Github Pages.
                    </p>
                    <a
                      href="https://github.com/davidjungermann/davidjungermann.github.io"
                      className="card-link"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Message board forum</h5>
                    <p className="card-text">
                      Forum mock up. Built in Angular, uses AngularFire.
                    </p>
                    <a
                      href="https://github.com/davidjungermann/EDAF90-project"
                      className="card-link"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      API and database implementation
                    </h5>
                    <p className="card-text">
                      REST API with corresponding database that models
                      production of cookies. Built in Java, using Spark, and
                      SQLite.
                    </p>
                    <a
                      href="https://github.com/davidjungermann/EDAF75-Project"
                      className="card-link"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Object oriented programming</h5>
                    <p className="card-text">
                      Two projects that implement OOP principles. Built in Java.
                    </p>
                    <a
                      href="https://github.com/davidjungermann/EDAF60"
                      className="card-link"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Web security</h5>
                    <p className="card-text">
                      Mini-projects concerning web security, including payments,
                      electronic voting and cybersecurity. Written in Python.
                    </p>
                    <a
                      href="https://github.com/davidjungermann/EITN41"
                      className="card-link"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullpageSection>
  );
}

export default Projects;
