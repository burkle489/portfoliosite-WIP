import { navigate } from "@reach/router";
import React from "react";
import { useSpring, animated, useTrail } from 'react-spring';

const TopNav = () => {
  const initialize = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } })


  return (
    <div className="TopNav">
      <animated.h2
        style={initialize}
        onClick={() => {
          navigate("/");
        }}
      >
        burkle.dev
      </animated.h2>
    </div>
  );
};

export { TopNav };
