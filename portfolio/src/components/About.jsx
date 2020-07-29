import React from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import resume from "../assets/resume.pdf";
import "../stylesheets/Content.css";

function About() {
  return (
    <FullpageSection>
      <div className="content"> 
        <div className="container">
          <div className="info-body">
            <h1 className="content-heading">About me</h1>
            <p>
              My name is David Jungermann, and I'm an MSc student in{" "}
              <b>Information and Communication engineering technologies</b> at
              LTH, graduating spring 2021.
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
              <b>
                {" "}
                <a href={resume} download>
                  here.
                </a>
              </b>
            </p>
            Shoot me an{" "}
            <b>
              <a href="mailto:david.jungermann@gmail.com">email</a>
            </b>{" "}
            if you want to get in touch!
          </div>
        </div>
      </div>
    </FullpageSection>
  );
}

export default About;
