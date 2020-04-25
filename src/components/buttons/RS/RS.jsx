import React from "react";
import "./RS.css";
import colors from "../../../assets/colors";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actionCreators";

const RS = ({ location, table, id, showInModal }) => {
  const color = colors[location.pathname].dark;

  const handleClick = () => {
    showInModal(table === "requirements" ? "RSInfo" : "AgentRSInfo", id);
  };

  return (
    <div className="RS" style={{ backgroundColor: color }} onClick={handleClick}>
      RS
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showInModal: (component, data) => dispatch(actionCreators.showInModal(component, data)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(RS));
