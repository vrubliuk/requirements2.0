import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = ({ children, to, color }) => {
  const style = { background: color };

  const nav = /^http/.test(to) ? (
    <a className="Nav" style={style} href={to}>
      {children}
    </a>
  ) : (
    <NavLink className="Nav" style={style} exact to={to}>
      {children}
    </NavLink>
  );
  return nav;
};

export default Nav;
