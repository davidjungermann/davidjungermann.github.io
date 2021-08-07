import React, { useState } from 'react';
import profile from '../../assets/image_profile.jpg';
import AnimatedName from './AnimatedName';
import AnimatedPicture from './AnimatedPicture';
import '../../stylesheets/Header.css';

function StartDesktop() {
  const [textOpen, setTextOpen] = useState(true);
  return (
    <div className="header-desktop">
      <AnimatedPicture open={textOpen} onClick={() => setTextOpen((state) => !state)}>
        <img src={profile} alt="Profile" className="profile-image-desktop" />
      </AnimatedPicture>
      <AnimatedName
        className="header-text"
        open={textOpen}
        onClick={() => setTextOpen((state) => !state)}
      >
        <h1>David Jungermann</h1>
        <h5>Software Engineer</h5>
        <h5>IT Consultant at Netlight</h5>
      </AnimatedName>
    </div>
  );
}

export default StartDesktop;
