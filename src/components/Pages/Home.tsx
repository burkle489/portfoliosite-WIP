import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../Nav/Nav";
import { useSpring, animated, useTrail } from "react-spring";

const items = ["Tayler Burke", "Front-end Web Developer"];
const h1Config = { mass: 5, tension: 2000, friction: 500 };
const h2Config = { mass: 10, tension: 1000, friction: 1000 };

const Home: React.FC<any> = () => {
  const [indicator, setIndicator] = useState<any>(false);
  const [pointer, setPointer] = useState<boolean>(false);

  const h1 = useSpring({ opacity: 1, height: 210, from: { opacity: 0, height: 0 }, config: { h1Config } });
  const h2 = useSpring({ opacity: 1, height: 120, from: { opacity: 0, height: 0 }, config: { h2Config }, delay: 1000 });

  return (
    <div className="PageContent">
      <section className="HeroContainer">
        <div className="Hero">
          <div className="LeftHero">
            <animated.h1 style={h1}>Tayler Burke</animated.h1>
            <animated.h2 style={h2}>Front-end Web Developer</animated.h2>
          </div>
          <div className="RightHero">
            <Nav
              pointer={pointer}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
