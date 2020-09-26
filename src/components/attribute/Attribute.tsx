import {
  faBook,
  faComments,
  faTasks,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface AttributeProps {
  image: string;
  skill: string;
  description: string;
}

const Attribute: React.FC<AttributeProps> = ({ image, skill, description }) => {
  const icon = () => {
    switch (image) {
      case "simplicity":
        return <FontAwesomeIcon icon={faVial} size="7x" />;
      case "learner":
        return <FontAwesomeIcon icon={faBook} size="7x" />;
      case "approach":
        return <FontAwesomeIcon icon={faTasks} size="7x" />;
      case "receptive":
        return <FontAwesomeIcon icon={faComments} size="7x" />;
    }
  };
  return (
    <div className="Attribute">
      <div className="AttributeHeader">
        <div>{icon()}</div>
        <h3>{skill}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export { Attribute };
