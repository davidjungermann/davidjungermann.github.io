import React from "react";
import resume from "../assets/resume.pdf";
import "../stylesheets/Content.css";

class About extends React.Component {
  render() {
    return (
      <div className="content">
        <div class="container">
          <div className="info-body">
            <h1 className="content-heading">About me</h1>
            <p>
              My name is David Jungermann, and I'm a final year MSc student in{" "}
              <b>Information and Communication engineering technologies</b> at
              LTH.
            </p>
            <p>
              I'm currently working my second year as a full stack developer at
              Tetra Pak, as a part of their <b>Student Talent program</b>, which
              involves part time work during the semester, and full time work
              during summer.
            </p>
            <p>
              In my spare time I make a lot of music, both individually and in
              bands. Furthermore, I like skateboarding, hiking and hanging out
              with friends and family.
            </p>
            <p className="para-end">
              For further information, check out my resume{" "}
              <a href={resume} download>
                here.
              </a>
            </p>
            Shoot me an{" "}
            <b>
              <a href="mailto:david.jungermann@gmail.com">email</a>
            </b>{" "}
            if you want to get in touch!
          </div>
        </div>
      </div>
    );
  }
}

export default About;
