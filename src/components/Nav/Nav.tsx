import React from 'react';
import { Link } from '@reach/router';
import "../../styles/Nav.scss";

const Nav = () => {
    return (
        <nav className="Navigation">
            <Link className="NavLink" to="/projects">Projects</Link>
            <Link className="NavLink" to="/about">About</Link>
            {/* <Link className="NavLink" to="/about">About</Link> */}

            <Link className="NavLink" to="/">Home</Link>
        </nav>
    )
}

export default Nav;