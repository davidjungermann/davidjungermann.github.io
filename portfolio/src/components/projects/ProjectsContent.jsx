import React from 'react';
import { WebCard } from './WebCard';

function ProjectsContent() {
  return (
    <div className="content">
      <div className="container">
        <div className="info-body">
          <h1 className="content-heading">Projects</h1>
          <div className="row">
            <WebCard
              title="Vote counting application"
              link="https://github.com/davidjungermann/voting-vg"
            >
              Application used for electronic voting. Used for generating results from votings made
              in Google Forms. Built in React, uses ExcelJS and Firebase.
            </WebCard>

            <WebCard
              title="Personal website"
              link="https://github.com/davidjungermann/davidjungermann.github.io"
            >
              Portfolio, which happens to be this very page! Built in React and hosted on Github
              Pages.
            </WebCard>

            <WebCard
              title="Message board forum"
              link="https://github.com/davidjungermann/EDAF90-project"
            >
              Forum mock up, with real-time updating, and database storage. Built in Angular, uses
              Firestore.
            </WebCard>
          </div>

          <div className="row">
            <WebCard
              title="REST API reference documentation"
              link="https://github.com/davidjungermann/homepal-api-documentation"
            >
              Code for master's thesis project, that includes documentation for a contained .NET
              REST API, written in React.
            </WebCard>

            <WebCard
              title="Object oriented programming"
              link="https://github.com/davidjungermann/EDAF60"
            >
              Two projects that implement OOP principles. Built in Java.
            </WebCard>

            <WebCard title="Web security" link="https://github.com/davidjungermann/EITN41">
              Mini-projects concerning web security, including payments, electronic voting and
              cybersecurity. Written in Python.
            </WebCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProjectsContent };
