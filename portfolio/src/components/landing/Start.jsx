import React from 'react';
import Header from './Header';
import StartDesktop from './StartDesktop';
import StartMobile from './StartMobile';
import '../../stylesheets/Start.css';

function Start(props) {
  return (
    <div className="layout-root">
      <Header />
      {props.isDesktop ? <StartDesktop /> : <StartMobile />}
    </div>
  );
}

export default Start;
