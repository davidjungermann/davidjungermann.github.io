import React, { useState } from 'react';
import { AnimatedName } from './AnimatedName';
import '../../stylesheets/Header.css';

function StartMobile() {
  const [textOpen, setTextOpen] = useState(true);
  return (
    <div className="header-mobile">
      <AnimatedName
        className="header-text"
        open={textOpen}
        onClick={() => setTextOpen((state) => !state)}
      >
        <h3 className="mobile-name">Hej!</h3>
      </AnimatedName>
    </div>
  );
}

export { StartMobile };
