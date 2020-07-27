import React from "react";
import profile from "../assets/image_profile.jpg";
import "../stylesheets/Header.css";

class Start extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          src={profile}
          height="350"
          width="350"
          className="rounded-circle"
          alt="Profile"
        />
        <div>
          <div className="header-text">
            <h1>David Jungermann</h1>
            <h5>
              5th year MSc student at LTH
            </h5>
            <h5>Full stack developer in the Student Talent programme at Tetra Pak</h5>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Start;
