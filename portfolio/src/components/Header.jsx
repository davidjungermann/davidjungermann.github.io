import React from "react";
import profile from "../assets/image_profile.jpg";
import "../stylesheets/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
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
