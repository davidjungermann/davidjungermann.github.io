import React, { useState } from "react";
import profile from "../../assets/image_profile.jpg";
import AnimatedName from "./AnimatedName";
import AnimatedPicture from "./AnimatedPicture";
import "../../stylesheets/Header.css";

function StartMobile() {
  const [textOpen, setTextOpen] = useState(true);
  return (
    <div className="header-mobile">
      <AnimatedPicture
        open={textOpen}
        onClick={() => setTextOpen((state) => !state)}
      >
        <img src={profile} alt="Profile" className="profile-image-mobile" />
      </AnimatedPicture>
      <AnimatedName
        className="header-text"
        open={textOpen}
        onClick={() => setTextOpen((state) => !state)}
      >
        <h3 className="mobile-name">David Jungermann</h3>
      </AnimatedName>
    </div>
  );
}

export default StartMobile;
