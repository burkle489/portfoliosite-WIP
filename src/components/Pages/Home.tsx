import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../Nav/Nav";

const moveToAttributes = () => {
  const height = window.innerHeight;
  window.scrollBy(0, height);
};

const Home: React.FC<any> = () => {
  return (
    <div className="PageContent">
      <section className="HeroContainer">
        <div className="Hero">
          <div className="LeftHero">
            <h1>Tayler Burke</h1>
            <h2>Front-end Web Developer</h2>
          </div>
          <div className="RightHero">
            <div className="NavContainer">
              <Nav />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
