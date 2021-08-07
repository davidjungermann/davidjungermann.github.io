import React from 'react';
import { useTrail, a } from 'react-spring';
import '../../stylesheets/AnimatedPicture.css';

function AnimatedPicture({ open, children, ...props }) {
  var uniqid = require('uniqid');
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 100, tension: 1000, friction: 500 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 30 },
  });
  return (
    <div className="animated-name-root" {...props}>
      <div>
        {trail.map(({ x, ...rest }, index) => (
          <a.div
            key={uniqid()}
            className="animated-name-picture"
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(-${x}px, 0 ,0)`),
            }}
          >
            <a.div>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedPicture;
