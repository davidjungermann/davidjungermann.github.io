import React from "react";
import WebCard from "./WebCard";

function ProjectsContentMobile() {
  return (
    <div className="content">
      <div className="container">
        <div className="info-body">
          <h1 className="content-heading">Projects</h1>
          <div className="row">
            <WebCard
              title="Vote counting application"
              link="https://github.com/davidjungermann/voting-vg"
            ></WebCard>

            <WebCard
              title="Personal website"
              link="https://github.com/davidjungermann/davidjungermann.github.io"
            ></WebCard>

            <WebCard
              title="Message board forum"
              link="https://github.com/davidjungermann/EDAF90-project"
            ></WebCard>
          </div>

          <div className="row">
            <WebCard
              title="API and database implementation"
              link="https://github.com/davidjungermann/EDAF75-Project"
            ></WebCard>

            <WebCard
              title="Object oriented programming"
              link="https://github.com/davidjungermann/EDAF60"
            ></WebCard>

            <WebCard
              title="Web security"
              link="https://github.com/davidjungermann/EITN41"
            ></WebCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsContentMobile;
