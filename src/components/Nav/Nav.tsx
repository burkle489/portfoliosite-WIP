import React, { useState } from "react";
import { Link } from "@reach/router";
import "../../styles/Nav.scss";
import { useSpring, animated, useSprings, useTrail } from "react-spring";

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

  const items = [
    {
      position: { projects: true, about: false, contact: false },
      to: "/projects",
      label: "Projects",
    },
    {
      position: { projects: false, about: true, contact: false },
      to: "/about",
      label: "About",
    },
    {
      position: { projects: false, about: false, contact: true },
      to: "/contact",
      label: "Contact",
    },
  ]
  const config = { mass: 5, tension: 1500, friction: 500 }

  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 0,
    width: 200,
    delay: 2000,
    from: { opacity: 0, x: 20, width: 0 },
  })
  return (
    <>
      <div className="NavPointer">
        <animated.span style={movePointer} className="Pointer">
          >
        </animated.span>
      </div>
      <div className="NavContainer">
        <nav className="Navigation">
          {
            trail.map(({ width, x, ...rest }, index) => (
              <animated.div style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                <animated.div style={{ width }}>
                  <Link to={items[index].to}
                    onMouseLeave={() => { setOpacity(false) }}
                    onMouseEnter={() => {
                      setOpacity(true)
                      setPosition(items[index].position)
                    }}>
                    {items[index].label}
                  </Link>
                </animated.div>
              </animated.div>
            ))
          }
          {/* <Link
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
          </Link> */}
        </nav>
      </div>
    </>
  );
};

export default Nav;
