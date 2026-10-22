import React from 'react';
import { WebCard } from './WebCard';

function ProjectsContent() {
  return (
    <div className="content">
      <div className="container">
        <div className="info-body">
          <h1 className="content-heading">Projects</h1>
          <div className="row">
            <WebCard title="Avant" link="https://avant.codes">
              One workspace for the models, credentials, tools, and policy behind a team's AI
              harnesses
            </WebCard>

            <WebCard title="Days Since" link="https://github.com/davidjungermann/days-since">
              React app that automates standup and support rotations, including an interactive
              counter to ensure teams can celebrate when records are broken
            </WebCard>

            <WebCard
              title="Personal website"
              link="https://github.com/davidjungermann/davidjungermann.github.io"
            >
              The page you are currently on. Built in React with RXJS
            </WebCard>
          </div>

          <div className="row">
            <WebCard title="Auxe" link="https://auxe.se">
              Collaborative jukebox where everyone in a room can queue and vote on songs together in
              real-time
            </WebCard>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProjectsContent };
