import React from "react";
import { useSpring, animated } from "react-spring";
import profile from "../assets/image_profile.jpg";
import "../stylesheets/Start.css";

function Start() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });
  return (
    <div className="header">
      <animated.div style={props}>
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
            <h5>5th year MSc student at LTH</h5>
            <h5>
              Full stack developer in the Student Talent programme at Tetra Pak
            </h5>
          </div>
          <div></div>
        </div>
      </animated.div>
    </div>
  );
}

export default Start;
