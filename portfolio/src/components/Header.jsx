import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.png";
import profile from "../assets/image_profile.jpg";
import "../stylesheets/Header.css";
import Jumbotron from "react-bootstrap/Jumbotron";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="float-right">
            <div>
              <a href="https://github.com/davidjungermann">
                <img src={github} height="40" width="40" alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/david-jungermann-13a550162/">
                <img src={linkedin} height="40" width="40" alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4 align-middle">
                <img
                  src={profile}
                  height="250"
                  width="250"
                  className="rounded-circle float-left"
                  alt="Profile"
                />
              </div>
              <div className="col-md-5 mt-5">
                <h1>David Jungermann</h1>
                <br></br>
                <h5>
                  5th year MSc student in Information and communication engineering technologies
                </h5>
                Student Talent at Tetra Pak
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
