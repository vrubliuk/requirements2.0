import React, { Component } from "react";
import "./EditRailLoadsRow.css";
import colors from "../../../assets/colors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../../store/actions/actionCreators";

class EditRailLoadsRow extends Component {
  state = {
    currentTable: 1,
    SCAC: "",
    carrier: "",
    equipmentType: "",
    abbreviation: ""
  };
  handleInput = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };
  handleSubmit = e => {
    if (!e.target.checkValidity()) return;
    e.preventDefault();
    const payload =
      this.state.currentTable === 1
        ? {
            SCAC: this.state.SCAC,
            carrier: this.state.carrier
          }
        : {
            equipmentType: this.state.equipmentType,
            abbreviation: this.state.abbreviation
          };
    this.props.initAddRow(`railLoads${this.state.currentTable}`, payload);
  };

  render() {
    const color = colors[this.props.location.pathname].dark;
    const tables = {
      1: (
        <form className="Modal__form" onSubmit={this.handleSubmit}>
          <div className="Modal__label">SCAC</div>
          <input className="Modal__input" type="text" required value={this.state.SCAC} onChange={e => this.handleInput(e, "SCAC")} />
          <div className="Modal__label">Carrier</div>
          <input className="Modal__input" type="text" value={this.state.carrier} onChange={e => this.handleInput(e, "carrier")} />
          <div className="Modal__footer">
            <button className="Modal__button" style={{ background: color }} type="submit">
              Add
            </button>
          </div>
        </form>
      ),
      2: (
        <form className="Modal__form" onSubmit={this.handleSubmit}>
          <div className="Modal__label">Equipment type</div>
          <input className="Modal__input" type="text" value={this.state.equipmentType} onChange={e => this.handleInput(e, "equipmentType")} />
          <div className="Modal__label">Abbreviation</div>
          <input className="Modal__input" type="text" value={this.state.abbreviation} onChange={e => this.handleInput(e, "abbreviation")} />
          <div className="Modal__footer">
            <button className="Modal__button" style={{ background: color }} type="submit">
              Add
            </button>
          </div>
        </form>
      )
    };

    return (
      <div className="EditRailLoadsRow">
        <div className="Modal__title">Add new rail loads information</div>
        <div className="Modal__header">
          <div className="Modal__switch" style={{ borderBottom: this.state.currentTable === 1 && `2px solid ${color}` }} onClick={() => this.setState({ currentTable: 1 })}>
            Table 1
          </div>
          <div className="Modal__switch" style={{ borderBottom: this.state.currentTable === 2 && `2px solid ${color}` }} onClick={() => this.setState({ currentTable: 2 })}>
            Table 2
          </div>
        </div>
        {tables[this.state.currentTable]}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initAddRow: (table, payload) => dispatch(actionCreators.initAddRow(table, payload))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(EditRailLoadsRow)
);
