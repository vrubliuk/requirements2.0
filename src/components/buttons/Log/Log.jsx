import React from "react";
import "./Log.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actionCreators";

const Log = ({ token, setToken, openInModal }) => {
  let text = token ? "Log out" : "Log in";

  let handleClick = () => {
    token ? setToken(null) : openInModal("auth");
  };

  return <button className="Log" onClick={() => handleClick()}>{text}</button>;
};

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: token => dispatch(actionCreators.setToken(token)),
    openInModal: component => dispatch(actionCreators.openInModal(component))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Log);
