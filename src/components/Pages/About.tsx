import { navigate } from "@reach/router";
import React from "react";
import { Attribute } from "../attribute/Attribute";

interface Attribute {
  image: string;
  skill: string;
  description: string;
}

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

const About = () => {
  const comingSoon = false;

  return (
    <div className="PageContent">
      {comingSoon ? (
        <div className="ComingSoon">
          <h2>About Page Coming Soon</h2>
          <button
            className="Btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to home
          </button>
        </div>
      ) : (
          <div className="PageWrapper WidthContent">
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
          </div>
        )}
    </div>
  );
};

export default About;
