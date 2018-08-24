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
        <div className="Auth__title">Log in to Requirements</div>
        <form className="Auth__form" onSubmit={this.handleSubmit}>
          <div className="Auth__label">Email address</div>
          <input className="Auth__input" type="email" required value={this.state.email} onChange={e => this.handleInput(e, "email")} />
          <div className="Auth__label">Password</div>
          <input className="Auth__input" type="password" required value={this.state.password} onChange={e => this.handleInput(e, "password")} />
          <div className="Auth__footer">
            {this.props.error && (
              <div className="Auth__error" style={{ color }}>
                Incorrect email address or password
              </div>
            )}
            <button className="Auth__button" style={{ background: color }} type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error
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
