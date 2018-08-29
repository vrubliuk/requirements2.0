import React from "react";
import "./Up.css";
import colors from "../../../assets/colors";
import {withRouter} from "react-router-dom"
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const Up = ({location}) => {
  const color = colors[location.pathname].dark;
  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <div className="Up" style={{background: color}} onClick={handleClick}>
      <i className="fa fa-chevron-up" aria-hidden="true" />
    </div>
  );
};

export default withRouter(Up);
