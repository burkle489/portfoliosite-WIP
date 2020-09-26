import React, { useState } from 'react';
import { Link } from '@reach/router';
import "../../styles/Nav.scss";
import Burger from './Burger';

const Nav = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Burger
                setOpen={setOpen}
                open={open}
            />
            {open &&
                <nav className="NavContainer">
                    <Link className="NavLink" to="/">Home</Link>
                    <Link className="NavLink" to="/about">About</Link>
                    <Link className="NavLink" to="/projects">Projects</Link>
                </nav>
            }
        </>
    )
}

export default Nav;