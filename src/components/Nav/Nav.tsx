import React, { useState } from "react";
import { Link } from "@reach/router";
import "../../styles/Nav.scss";
import { useSpring, animated, useSprings } from "react-spring";

type NavProps = {
  pointer: any;
  indicator: any;
  setIndicator: any;
};

const Nav: React.FC<NavProps> = ({ pointer, indicator, setIndicator }) => {
  const [projectsLocation, setProjectsLocation] = useState<any>(false);
  const [aboutLocation, setAboutLocation] = useState<any>(false);
  const [contactLocation, setContactLocation] = useState<any>(false);
  const [lastPosition, setLastPosition] = useState<any>("");

  const [position, setPosition] = useState<any>({
    projects: true,
    about: false,
    contact: false,
  });

  const movePointer = useSpring({
    transform: position.projects
      ? "translate3d(0,220px,0)"
      : position.about
      ? "translate3d(0,305px,0)"
      : position.contact
      ? "translate3d(0,395px,0)"
      : `translate3d(0,100px,0)`,
  });

  return (
    <>
      <div className="NavPointer">
        <animated.span style={movePointer} className="Pointer">
          >
        </animated.span>
      </div>
      <div className="NavContainer">
        <nav className="Navigation">
          <Link
            className="NavLink Projects"
            to="/projects"
            onMouseEnter={() => {
              setPosition({ projects: true, about: false, contact: false });
            }}
          >
            Projects
          </Link>
          <Link
            className="NavLink"
            to="/about"
            onMouseEnter={() => {
              setPosition({ projects: false, about: true, contact: false });
            }}
          >
            About
          </Link>
          <Link
            className="NavLink"
            to="/contact"
            onMouseEnter={() => {
              setPosition({ projects: false, about: false, contact: true });
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;
