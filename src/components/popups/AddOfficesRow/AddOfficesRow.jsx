import React, { Component } from "react";
import "./AddOfficesRow.css";
import colors from "../../../assets/colors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../../store/actions/actionCreators";

class AddOfficesRow extends Component {
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
    this.props.initAddRow("offices", {
      office: this.state.office.trim(),
      abbreviation: this.state.abbreviation.trim(),
      leader: this.state.leader.trim(),
      GSM: this.state.GSM.trim()
    });
  };

  render() {
    const color = colors[this.props.location.pathname].dark;
    return (
      <div className="AddOfficesRow">
        <div className="Modal__title">Add row</div>
        <form className="Modal__form" onSubmit={this.handleSubmit}>
          <div className="Modal__label">Office</div>
          <input className="Modal__input" type="text" required value={this.state.office} onChange={e => this.handleInput(e, "office")} />
          <div className="Modal__label">Abbreviation</div>
          <input className="Modal__textarea" type="text" value={this.state.abbreviation} onChange={e => this.handleInput(e, "abbreviation")} />
          <div className="Modal__label">Leader</div>
          <input className="Modal__input" type="text" value={this.state.leader} onChange={e => this.handleInput(e, "leader")} />
          <div className="Modal__label">GSM</div>
          <input className="Modal__input" type="text" value={this.state.GSM} onChange={e => this.handleInput(e, "GSM")} />
          <div className="Modal__footer">
            <button style={{ background: color }} type="submit">
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
    initAddRow: (table, row) => dispatch(actionCreators.initAddRow(table, row))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddOfficesRow)
);
