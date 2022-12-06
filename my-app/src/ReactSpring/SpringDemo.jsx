import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

const SpringDemo = () => {
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 500 },
    number: 1000,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default SpringDemo;
