import React from "react";
import { useSpring, animated } from "react-spring";
import profile from "../assets/image_profile.jpg";
import scroll from "../assets/arrow-down.svg";
import "../stylesheets/Start.css";

function Start() {
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: 1 },
    config: { mass: 1, tension: 500, friction: 10 },
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
          <h1>David Jungermann</h1>
          <h5>5th year MSc student at LTH</h5>
          <h5>
            Full stack developer in the Student Talent programme at Tetra Pak
          </h5>
        </div>
        <div></div>
      </div>
      <animated.div
        style={{
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [0, -10, 0, 10, 0, -10, 0, 10, 0],
            })
            .interpolate((x) => `translate3d(0px, ${x}px, 0px)`),
        }}
      >
        <img
          className="scroll"
          src={scroll}
          height="40"
          width="40"
          alt="scroll"
        ></img>
      </animated.div>
    </div>
  );
}

export default Start;
