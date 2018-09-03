import React from "react";
import "./Close.css";
import colors from "../../../assets/colors";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actionCreators";

const Close = ({ location, closeModal }) => {
  const color = colors[location.pathname].dark;
  const handleClick = () => {
    closeModal();
  };

  return (
    <div className="Close" style={{ background: color }} onClick={() => handleClick()}>
      <i className="fa fa-times" aria-hidden="true" />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(actionCreators.closeModal())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Close)
);
