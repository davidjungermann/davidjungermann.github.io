import React from "react";
import { useSpring, animated } from "react-spring";
import profile from "../assets/image_profile.jpg";
import "../stylesheets/Header.css";

function Start() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2500 },
  });
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
          <animated.h1 style={props}>David Jungermann</animated.h1>
          <animated.h5 style={props}>
            <h5>5th year MSc student at LTH</h5>
          </animated.h5>
          <animated.h5 style={props}>
            <h5>
              Full stack developer in the Student Talent programme at Tetra Pak
            </h5>
          </animated.h5>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Start;
