import React from "react";
import "../stylesheets/Content.css";

function Projects() {
  return (
    <div className="content">
      <div class="container">
        <div className="info-body">
          <h1 className="content-heading">Projects</h1>
          Vote counter that can be used generate results from votings made in
          Google Forms. Built in React, uses ExcelJS and Firebase.
          <p>
            <a href="https://github.com/davidjungermann/voting-vg">Source</a>
          </p>
          Portfolio page, which happens to be this very page! Built in React and
          hosted on Github Pages.
          <p>
            <a href="https://github.com/davidjungermann/davidjungermann.github.io">
              Source
            </a>
          </p>
          Forum mock up. Built in Angular, uses AngularFire.
          <p>
            <a href="https://github.com/davidjungermann/EDAF90-project">
              Source
            </a>
          </p>
          REST API with corresponding database that models production of
          cookies. Built in Java, using Spark, and SQLite.
          <p>
            <a href="https://github.com/davidjungermann/EDAF75-Project">
              Source
            </a>
          </p>
          Two projects that implement OOP principles. Built in Java.
          <p>
            <a href="https://github.com/davidjungermann/EDAF60">Source</a>
          </p>
          Mini-projects concerning web security, including payments, electronic
          voting and cybersecurity. Written in Python.
          <p>
            <a href="https://github.com/davidjungermann/EITN41">Source</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
