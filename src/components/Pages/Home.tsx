import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Attribute } from "../attribute/Attribute";
import Nav from "../Nav/Nav";

interface Attribute {
  image: string;
  skill: string;
  description: string;
}

const moveToAttributes = () => {
  const height = window.innerHeight;
  window.scrollBy(0, height);
};

const attributes: Attribute[] = [
  {
    image: "learner",
    skill: "Ardent Learner",
    description: "I often say as long as I am learning, I am happy.",
  },
  {
    image: "approach",
    skill: "Approach",
    description:
      "I have varied educational / work experience. I can approach a problem from multiple angles.",
  },
  {
    image: "simplicity",
    skill: "Simplicity",
    description:
      "Sometimes the best way to solve a problem is to keep it simple.",
  },
  {
    image: "receptive",
    skill: "Receptive",
    description:
      "I welcome constructive criticism with open arms, it's the best way to grow and learn.",
  },
];

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
      <div className="PageWrapper">
        <div className="MovePageDown" onClick={moveToAttributes}>
          <FontAwesomeIcon icon={faChevronDown} size="2x" />
        </div>
        <section className="Attributes">
          {attributes.map((a) => (
            <Attribute
              image={a.image}
              skill={a.skill}
              description={a.description}
            />
          ))}
        </section>
        <section className="Introduction">
          <p style={{ textAlign: "start", alignSelf: "flex-start" }}>
            Since beginning my self-taught journey, I have not looked back. I
            know this is <span>exactly</span> what I want to do for years to
            come.{" "}
          </p>
          <p style={{ textAlign: "end", alignSelf: "flex-end" }}>
            I love what I do - otherwise I wouldn't be writing this on a
            Saturday evening, would I?
          </p>
        </section>
        <section className="Projects">

        </section>
      </div>
    </div>
  );
};

export default Home;
