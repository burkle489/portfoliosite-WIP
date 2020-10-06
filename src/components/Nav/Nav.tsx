import React, { useState } from "react";
import { Link } from "@reach/router";
import "../../styles/Nav.scss";
import { useSpring, animated, useSprings } from "react-spring";

type NavProps = {
  pointer: any;

};

const Nav: React.FC<NavProps> = ({ pointer }) => {
  const [opacity, setOpacity] = useState<boolean>(false);
  const [position, setPosition] = useState<any>({
    projects: true,
    about: false,
    contact: false,
  });

  const movePointer = useSpring({
    transform: position.projects
      ? "translate3d(0,260px,0)"
      : position.about
        ? "translate3d(0,345px,0)"
        : position.contact
          ? "translate3d(0,435px,0)"
          : `translate3d(0,260px,0)`,
    opacity: opacity ? 1 : 0
  });

  return (
    <>
      <div className="NavPointer">
        <animated.span style={movePointer} className="Pointer">
          >
        </animated.span>
      </div>
      <div className="NavContainer">
        <nav className="Navigation" onMouseEnter={() => { setOpacity(true) }} onMouseLeave={() => { setOpacity(false) }}>
          <Link
            className="NavLink Projects"
            to="/projects"
            onMouseEnter={() => {
              setOpacity(true);
              setPosition({ projects: true, about: false, contact: false });
            }}
            onMouseLeave={() => { setOpacity(false) }}
          >
            Projects
          </Link>
          <Link
            className="NavLink"
            to="/about"
            onMouseEnter={() => {
              setOpacity(true);
              setPosition({ projects: false, about: true, contact: false });
            }}
            onMouseLeave={() => { setOpacity(false) }}
          >
            About
          </Link>
          <Link
            className="NavLink"
            to="/contact"
            onMouseEnter={() => {
              setOpacity(true);
              setPosition({ projects: false, about: false, contact: true });
            }}
            onMouseLeave={() => { setOpacity(false) }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;
