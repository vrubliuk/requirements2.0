import React from "react";
import "./Close.css";
import colors from "../../../assets/colors";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actionCreators";

const Close = ({ location, showInModal }) => {
  const color = colors[location.pathname].dark;
  const handleClick = () => {
    showInModal(null);
  };

  return (
    <div
      className="Close"
      style={{ background: color }}
      onClick={() => handleClick()}
    >
      <i className="fa fa-times" aria-hidden="true" />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showInModal: component => dispatch(actionCreators.showInModal(component))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Close)
);
