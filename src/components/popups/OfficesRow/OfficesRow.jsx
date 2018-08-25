import React, { Component } from "react";
import "./OfficesRow.css"
import colors from "../../../assets/colors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../../store/actions/actionCreators";

class OfficesRow extends Component {
  state = {
    office: "",
    abbreviation: "",
    leader: "",
    GSM: ""
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
      <div className="OfficesRow">
        <div className="Modal__title">Add new office</div>
        <form className="Modal__form" onSubmit={this.handleSubmit}>
          <div className="Modal__label">Office</div>
          <input className="Modal__input" type="text" required value={this.state.office} onChange={e => this.handleInput(e, "office")} />
          <div className="Modal__label">Abbreviation</div>
          <input className="Modal__textarea" type="text" required value={this.state.abbreviation} onChange={e => this.handleInput(e, "abbreviation")} />
          <div className="Modal__label">Office leader</div>
          <input className="Modal__input" type="text" required value={this.state.leader} onChange={e => this.handleInput(e, "leader")} />
          <div className="Modal__label">GSM</div>
          <input className="Modal__input" type="text" required value={this.state.GSM} onChange={e => this.handleInput(e, "GSM")} />
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
  )(OfficesRow)
);
