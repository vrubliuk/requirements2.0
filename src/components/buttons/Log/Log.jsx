import React from "react";
import "./Log.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actionCreators";

const Log = ({ token,  showInModal, logOut }) => {
  let text = token ? "Log out" : "Log in";

  let handleClick = () => {
    token ? logOut() : showInModal("Auth");
  };

  return <button className="Log" onClick={handleClick}>{text}</button>;
};

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showInModal: component => dispatch(actionCreators.showInModal(component)),
    logOut: () => dispatch(actionCreators.logOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Log);
