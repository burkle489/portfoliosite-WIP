import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../Nav/Nav";
import { useSpring, animated, useTrail } from "react-spring";
import { store } from "../../store";

const Home: React.FC<any> = ({ initialVisit, setInitialVisit }) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const [indicator, setIndicator] = useState<any>(false);
  const [pointer, setPointer] = useState<boolean>(false);

  React.useEffect(() => {
    setInitialVisit(false);
  }, [])

  const h1 = useSpring({
    opacity: 1,
    height: 220,
    from: initialVisit ? { opacity: 0, height: 0 } : { opacity: 1, height: 220 },
    config: { mass: 10, tension: 2000, friction: 500 }
  });

  const h2 = useSpring({
    opacity: 1,
    height: 120,
    from: initialVisit ? { opacity: 0, height: 0 } : { opacity: 1, height: 120 },
    config: { mass: 10, tension: 2000, friction: 1000 },
    delay: 1000,
  });

  return (
    <div className="PageContent">
      <section className="HeroContainer">
        <div className="Hero WidthContent">
          <div className="LeftHero">
            <animated.h1 style={h1}>Tayler <br />Burke</animated.h1>
            <animated.h2 style={h2}>Front-end <br />Web Developer</animated.h2>
          </div>
          <div className="RightHero">
            <Nav pointer={pointer} initialVisit={initialVisit} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
