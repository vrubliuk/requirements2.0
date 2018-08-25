import React, { Component } from "react";
import "./RequirementsRow.css"
import colors from "../../../assets/colors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../../store/actions/actionCreators";

class AddOrEditRequirement extends Component {
  state = {
    сustomer: "",
    documentation: "",
    releaseSheetLink: "",
    releaseSheetAE: ""
  };
  handleInput = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };
  handleSubmit = e => {
    if (!e.target.checkValidity()) return;
    e.preventDefault();
     // this.props.logIn(this.state.email, this.state.password);

  };

  render() {
    const color = colors[this.props.location.pathname].dark;
    return (
      <div className="RequirementsRow">
        <div className="Modal__title">Add new requirement</div>
        <form className="Modal__form" onSubmit={this.handleSubmit}>
          <div className="Modal__label">Customer</div>
          <input className="Modal__input" type="text" required value={this.state.сustomer} onChange={e => this.handleInput(e, "сustomer")} />
          <div className="Modal__label">Documentation</div>
          <textarea className="Modal__textarea" required value={this.state.documentation} onChange={e => this.handleInput(e, "documentation")} />
          <div className="Modal__label">Release sheet link on shared drive</div>
          <input className="Modal__input" type="text" value={this.state.releaseSheetLink} onChange={e => this.handleInput(e, "releaseSheetLink")} />
          <div className="Modal__label">Responsible AE for release sheet</div>
          <input className="Modal__input" type="text" value={this.state.releaseSheetAE} onChange={e => this.handleInput(e, "releaseSheetAE")} />
          <div className="Modal__footer">
            <button className="Modal__button" style={{ background: color }} type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showInModal: component => dispatch(actionCreators.showInModal(component))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddOrEditRequirement)
);
