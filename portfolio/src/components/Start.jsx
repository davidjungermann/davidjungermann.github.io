import React, { useState } from "react";
import Header from "./Header";
import profile from "../assets/image_profile.jpg";
import AnimatedName from "./AnimatedName";
import "../stylesheets/Start.css";

function Start() {
  const [open, set] = useState(true);
  return (
    <div className="layout-root">
      <Header />
      <div className="header">
        <img src={profile} alt="Profile" className="profile-image" />

        <AnimatedName
          className="header-text"
          open={open}
          onClick={() => set((state) => !state)}
        >
          <h1>David Jungermann</h1>
          <h5>5th year MSc student at LTH</h5>
          <h5>
            Full stack developer in the Student Talent program at Tetra Pak
          </h5>
        </AnimatedName>
      </div>
    </div>
  );
}

export default Start;
