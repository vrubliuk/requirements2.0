import React from "react";
import "./Delete.css";
import colors from "../../../assets/colors";
import { withRouter } from "react-router-dom";

const Delete = ({ location, handleClick }) => {
  const color = colors[location.pathname].dark;
  return (
    <div className="Delete" style={{ borderColor: color, color }} onClick={handleClick}>
      <i className="fa fa-trash" aria-hidden="true" />
    </div>
  );
};

export default withRouter(Delete);
