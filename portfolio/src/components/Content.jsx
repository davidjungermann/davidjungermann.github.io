import React from "react";
import experiences from "../assets/molecule.svg";
import projects from "../assets/spaceship.svg";
import skills from "../assets/skill.svg";
import "../stylesheets/Content.css";
class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img
                className="skillsIcon"
                src={skills}
                height="60"
                width="60"
                alt="lightbulb"
              />
              <h2>Skills</h2>
              <br></br>
              <p>Programming</p>
              <p>Web Development</p>
              <p>API Development</p>
              <p>Database Development</p>
              <p>UX & UI design</p>
              <p>Project Management</p>
            </div>
            <div class="col-sm">
              <img
                className="expIcon"
                src={experiences}
                height="60"
                width="60"
                alt="molecule"
              />
              <h2>Experiences</h2>
              <br></br>
              <p>React.js | Angular</p>
              <p>Typescript | Javascript</p>
              <p>Java | .NET | Python</p>
              <p>SQL Server | SQLite | Firebase</p>
              <p>Node.js | Webpack | Babel </p>
              <p>Azure Devops | Docker</p>
            </div>
            <div class="col-sm">
              <img
                className="projIcon"
                src={projects}
                height="60"
                width="60"
                alt="spaceship"
              />
              <h2>Projects</h2>
              <br></br>
              <p>
                <a href="https://github.com/davidjungermann/voting-vg">
                  Vote counter. Built in React, uses ExcelJS and Firebase.
                </a>
              </p>
              <p>
                <a href="https://github.com/davidjungermann/EDAF90-project">
                  Forum mock up. Built in Angular, uses AngularFire.
                </a>
              </p>
              <p>
                <a href="https://github.com/davidjungermann/EDAF60">
                  Two projects that implement OOP principles. Built in Java.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
