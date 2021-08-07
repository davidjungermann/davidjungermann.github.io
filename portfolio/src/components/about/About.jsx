import React from 'react';
import resume from '../../assets/Jungermann_David_Resume.pdf';
import '../../stylesheets/Content.css';

function About() {
  return (
    <div className="content">
      <div className="container">
        <div className="info-body">
          <h1 className="content-heading">About me</h1>
          <p>
            My name is David Jungermann, and I'm an MSc student in{' '}
            <b>Information and Communication engineering technologies</b> at LTH, graduating spring
            2021. Currently based in Lund, Sweden.
          </p>
          <p>
            
            
            
            
            
            
                          As of January 2021, I will write my master thesis within Interaction Design at{' '}
            <b>
              <a href="https://homepal.se/">Homepal</a>
            </b>
            , with the working title:{' '}
            <i>Introducing Pedagogics and Interactive UX in Documentation and Developer Tools</i>,
            where we will attempt to improve Homepal's developer tools and API documentation using
            UX and Interaction Design.
          </p>
          <p>
            I'm currently working my second year as a full stack developer at Tetra Pak, as a part
            of their <b>Student Talent program</b>, which involves part time work during the
            semester, and full time work during summer.
          </p>
          <p>
            In my spare time I make a lot of music, both individually and in bands. Furthermore, I
            like skateboarding, hiking and hanging out with friends and family.
          </p>
          <p className="para-end">
            For further information, check out my resume{' '}
            <b>
              {' '}
              <a href={resume} download>
                here.
              </a>
            </b>
          </p>
          Shoot me an{' '}
          <b>
            <a href="mailto:david.jungermann@gmail.com">email</a>
          </b>{' '}
          , or write in my guestbook below if you want to get in touch!
        </div>
      </div>
    </div>
  );
}

export default About;
