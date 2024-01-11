import React from 'react';
import { WebCard } from './WebCard';

function ProjectsContent() {
  return (
    <div className="content">
      <div className="container">
        <div className="info-body">
          <h1 className="content-heading">Projects</h1>
          <div className="row">
            <WebCard title="Days Since" link="https://github.com/davidjungermann/days-since">
              React app that automates standup and support rotations, including an interactive
              counter to ensure teams can celebrate when records are broken
            </WebCard>

            <WebCard title="Vote counting" link="https://github.com/davidjungermann/voting-vg">
              Application for electronic voting. Used for generating results from votings made in
              Google Forms. Built in React, uses ExcelJS and Firebase
            </WebCard>

            <WebCard
              title="Personal website"
              link="https://github.com/davidjungermann/davidjungermann.github.io"
            >
              The React page you are currently on
            </WebCard>

            <WebCard title="Message board" link="https://github.com/davidjungermann/EDAF90-project">
              Internet forum, with real-time updates and authentication. Built using Angular,
              Firebase and rxjs
            </WebCard>
          </div>

          <div className="row">
            <WebCard
              title="API documentation"
              link="https://github.com/davidjungermann/homepal-api-documentation"
            >
              My master's thesis project, that includes custom built documentation for a contained
              .NET API
            </WebCard>

            <WebCard title="OOP" link="https://github.com/davidjungermann/EDAF60">
              Two Java projects that implement object oriented principles
            </WebCard>

            <WebCard title="Security" link="https://github.com/davidjungermann/EITN41">
              Mini-projects within web security, written in Python, including payments, electronic
              voting and general cybersecurity
            </WebCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProjectsContent };
