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
              The page you are currently on. Built in React with RXJS
            </WebCard>

            <WebCard title="Auxe" link="https://auxe.se">
              Collaborative jukebox where everyone in a room can queue and vote on songs together in
              real-time
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

            <WebCard title="ostider.se" link="https://ostider.se">
              Schedule for the Olympics with data aggregation to view broadcasting channels,
              participants, Swedish medal prospects, and number of medals in a single place
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
