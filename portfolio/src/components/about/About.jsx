import React from 'react';
import '../../stylesheets/Content.css';

function About() {
  return (
    <div className="content">
      <div className="container">
        <div className="info-body">
          <h1 className="content-heading">About me</h1>
          <p>
            My name is David Jungermann, I make my living as a software engineer. Currently working at Netlight in Stockholm,
            mainly workin with topics related to cloud, devops and SRE. Statically typed languages
            and hard contracts is (unfortunately?) a passion of mine
          </p>

          <p>
            I find joy in making developers happy - through automation, observability and data
            driven decision making
          </p>

          <p>
            Outside improving developer experiences, I play music often (not well), both for myself
            and in some bands. Cooking, as well as architecture and design are also important to me
            - not only in software
          </p>
        </div>
      </div>
    </div>
  );
}

export { About };
