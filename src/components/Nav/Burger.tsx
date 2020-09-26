import React, { useState, Dispatch } from "react";
import { Router, Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Nav.scss";

type BurgerProps = {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};
const Burger = (props: BurgerProps) => {
  const handleClick = () => {
    props.setOpen(!props.open);
  };

  return (
    <>
      <button className="Burger" onClick={handleClick}>
        {props.open ? (
          <FontAwesomeIcon icon={faTimes} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" />
        )}
      </button>
    </>
  );
};

export default Burger;
