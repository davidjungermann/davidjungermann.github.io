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
            My name is David Jungermann, and I'm a <b>Software Engineer</b>, with focus on{' '}
            <b>fullstack development</b>. I graduated from Lunds Tekniska Högskola in the spring of
            2021, with an MSc degree in{' '}
            <b>Information and Communication engineering technologies</b>.
          </p>
          <p>
            As of August 2021, I'm working as an IT consultant at{' '}
            <b>
              <a href="https://netlight.com/">Netlight</a>
            </b>{' '}
            in Stockholm, Sweden.
          </p>
          <p>
            My master's thesis was written within Interaction Design at{' '}
            <b>
              <a href="https://homepal.se/">Homepal</a>
            </b>
            , with the title: <i>Optimizing the usability of REST API reference documentation</i>.
            The master's thesis explores what features and properties should be included in a
            reference documentation order to support the needs of the end users.
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
          </b>
          , or write in my guestbook below if you want to get in touch!
        </div>
      </div>
    </div>
  );
}

export default About;
