import React from "react";
import "./Add.css";
import colors from "../../../assets/colors";
import * as actionCreators from "../../../store/actions/actionCreators";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Add = ({ token, location, showInModal }) => {
  const color = colors[location.pathname] && colors[location.pathname].dark;
  const popups = {
    "/": "AddRequirementsRow",
    "/agent": "AddAgentRequirementsRow",
    "/offices": "AddOfficesRow",
    "/rail-loads": "AddRailLoadsRow",
  };

  const handleClick = () => {
    showInModal(popups[location.pathname]);
  };

  return token ? (
    <div className="Add" style={{ background: color }} onClick={handleClick}>
      <i className="fa fa-plus" aria-hidden="true" />
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showInModal: (component) => dispatch(actionCreators.showInModal(component)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));
