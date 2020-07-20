import React from "react";
import experiences from "../assets/molecule.svg";
import projects from "../assets/spaceship.svg";
import skills from "../assets/skill.svg";
import "../stylesheets/Content.css";

class Content extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img className="skillsIcon" src={skills} height="60" width="60" alt="lightbulb"/>
            <h2>Skills</h2>
          </div>
          <div class="col-sm">
            <img className="expIcon" src={experiences} height="60" width="60" alt="molecule" />
            <h2>Experiences</h2>
          </div>
          <div class="col-sm">
            <img className="projIcon" src={projects} height="60" width="60" alt="spaceship" />
            <h2>Projects</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
