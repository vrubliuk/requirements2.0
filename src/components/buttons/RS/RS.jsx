import React from "react";
import "./RS.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actionCreators";

const RS = ({ id, showInModal }) => {
  const handleClick = () => {
    showInModal("RSInfo", id);
  };

  return (
    <div className="RS" onClick={handleClick}>
      RS
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showInModal: (component, data) => dispatch(actionCreators.showInModal(component, data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RS);
