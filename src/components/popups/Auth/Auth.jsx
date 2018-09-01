import React, { Component } from "react";
import "./Auth.css";
import colors from "../../../assets/colors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../../store/actions/actionCreators";

class Auth extends Component {
  state = {
    email: "",
    password: ""
  };
  handleInput = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };
  handleSubmit = e => {
    if (!e.target.checkValidity()) return;
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  };

  render() {
    const color = colors[this.props.location.pathname].dark;
    return (
      <div className="Auth">
        <div className="Modal__title">Log in to Requirements</div>
        <form className="Modal__form" onSubmit={this.handleSubmit}>
          <div className="Modal__label">Email address</div>
          <input className="Modal__input" type="email" required value={this.state.email} onChange={e => this.handleInput(e, "email")} />
          <div className="Modal__label">Password</div>
          <input className="Modal__input" type="password" required value={this.state.password} onChange={e => this.handleInput(e, "password")} />
          <div className="Modal__footer">
            <button className="Modal__button" style={{ background: color }} type="submit">
              Log in
            </button>
            {this.props.error && (
              <div className="Modal__error" style={{ color }}>
                Incorrect email address or password
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.temp.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: (email, password) => dispatch(actionCreators.logIn(email, password))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth)
);
