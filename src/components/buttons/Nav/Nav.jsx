import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import colors from "../../../assets/colors"

const Nav = ({ children, to }) => {
  const color =  colors[to].dark;

  const nav = /^http/.test(to) ? (
    <a className="Nav" style={{background: color}} href={to}>
      {children}
    </a>
  ) : (
    <NavLink className="Nav" style={{background: color}} exact to={to}>
      {children}
    </NavLink>
  );
  return nav;
};

export default Nav;
