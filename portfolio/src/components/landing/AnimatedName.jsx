import React from "react";
import { useTrail, a } from "react-spring";
import "../../stylesheets/AnimatedName.css";

function AnimatedName({ open, children, ...props }) {
  var uniqid = require("uniqid");
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 5000, friction: 500  },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay: 750,
  });
  return (
    <div className="animated-name-root" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={uniqid()}
            className="animated-name-text"
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedName;
