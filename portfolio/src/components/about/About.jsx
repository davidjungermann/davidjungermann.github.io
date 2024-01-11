import React from 'react';
import '../../stylesheets/Content.css';

function About() {
  return (
    <div className="content">
      <div className="container">
        <div className="info-body">
          <h1 className="content-heading">About me</h1>
          <p>My name is David Jungermann, and I try to be creative, but I'm not.</p>

          <p>
            I make my living as a software engineer, currently working at Netlight in Stockholm. I
            mainly work with topics related to cloud, devops and SRE. I'm big on statically typed
            languages and hard contracts.
          </p>

          <p>
            I find joy in making developers happy - through automation, observability and data
            driven decision making.
          </p>

          <p>
            I'm a hobby hoarder, but outside improving developer experiences, I play music often,
            but not well, both for myself and in a couple of bands. I like cooking, as well as
            architecture and design - the non programming kind as well.
          </p>
        </div>
      </div>
    </div>
  );
}

export { About };
