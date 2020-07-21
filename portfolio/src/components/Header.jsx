import React from "react";
import profile from "../assets/image_profile.jpg";
import "../stylesheets/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron">
          <div className="row">
            <div className="col-md-4 align-middle">
              <img
                src={profile}
                height="250"
                width="250"
                className="rounded-circle"
                alt="Profile"
              />
            </div>
            <div className="col-md-5 mt-5">
              <h1 className="header-text">David Jungermann</h1>
              <br></br>
              <h5 className="header-text">
                5th year MSc student in Information and communication
                engineering technologies at Lunds Tekniska Högskola
              </h5>
              <p className="header-text">Student Talent at Tetra Pak</p>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;
