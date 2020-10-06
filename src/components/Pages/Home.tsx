import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../Nav/Nav";
import { useSpring, animated } from "react-spring";

const Home: React.FC<any> = () => {
  const [indicator, setIndicator] = useState<any>(false);
  const [pointer, setPointer] = useState<boolean>(false);

  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="PageContent">
      <section className="HeroContainer">
        <div className="Hero">
          <div className="LeftHero">
            <animated.h1 style={fade}>Tayler Burke</animated.h1>
            <h2>Front-end Web Developer</h2>
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
