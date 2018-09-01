import React from "react";
import "./Loader.css";
import colors from "../../assets/colors";
import { withRouter } from "react-router-dom";

const Loader = ({ location }) => {
  const color = colors[location.pathname].dark;
  return (
    <div className="Loader">
      <div className="Loader__animation" style={{background: color, color}}  > </div>
    </div>
  );
};

export default withRouter(Loader);
