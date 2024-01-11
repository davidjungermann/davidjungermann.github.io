import React, { useState } from 'react';
import { AnimatedName } from './AnimatedName';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import '../../stylesheets/Header.css';
import face from '../../assets/face.jpg';

function StartDesktop() {
  const [textOpen, setTextOpen] = useState(true);
  return (
    <Container className="header-desktop">
      <Row>
        <Col xs={12} md={6} className="my-auto">
          {' '}
          {/* Adjust column sizes as needed */}
          <img src={face} alt="picture of me" className="face img-fluid" />
        </Col>
        <Col xs={12} md={6} className="my-auto">
          <AnimatedName
            className="header-text"
            open={textOpen}
            onClick={() => setTextOpen((state) => !state)}
          >
            <h1>Hej! :-)</h1>
            <h5>I'm David - a software engineer</h5>
          </AnimatedName>
        </Col>
      </Row>
    </Container>
  );
}

export { StartDesktop };
