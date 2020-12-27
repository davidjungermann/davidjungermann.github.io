import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import Header from "./Header";
import profile from "../assets/image_profile.jpg";
import scroll from "../assets/arrow-down.svg";
import "../stylesheets/Start.css";

function Start() {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const divRef = useRef(null);

  const { x } = useSpring({
    loop: true,
    delay: 3000,
    from: { x: 0 },
    to: { x: 1 },
    config: { mass: 1, tension: 300, friction: 5 },
  });

  return (
    <div>
      <Header />
      <div className="header">
        <img
          src={profile}
          alt="Profile"
          className="profile-image"
        />
        <div>
          <div className="header-text">
            <h1>David Jungermann</h1>
            <h5>5th year MSc student at LTH</h5>
            <h5>
              Full stack developer in the Student Talent program at Tetra Pak
            </h5>
          </div>
          <div></div>
        </div>
        <animated.div
          className="scroll"
          style={{
            transform: x
              .to({
                range: [0, 0.5, 1],
                output: [0, 20, 0],
              })
              .to((x) => `translate3d(0px, ${x}px, 0px)`),
          }}
          onClick={() => scrollToRef(divRef)}
        >
          <img src={scroll} height="40" width="40" alt="scroll"></img>
        </animated.div>
      </div>
      <div ref={divRef}></div>
    </div>
  );
}

export default Start;
