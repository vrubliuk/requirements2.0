import React, { Component } from "react";
import "./EditRailLoadsRow.css";
import colors from "../../../assets/colors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../../store/actions/actionCreators";
import Delete from "../../buttons/Delete/Delete.jsx";

class EditRailLoadsRow extends Component {
  state = {
    currentTable: null,
    SCAC: "",
    carrier: "",
    equipmentType: "",
    abbreviation: "",
    showDeletionConfirmation: false
  };

  updateCurrentTable = () => {
    this.setState({currentTable: this.props.data.table})
  }

  updateInputs = () => {
    Object.keys(this.props.data.row).forEach(cell => {
      this.setState({ [cell]: this.props.data.row[cell] });
    });
  };

  handleInput = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };

  handleSubmit = e => {
    if (!e.target.checkValidity()) return;
    e.preventDefault();
    const row =
      this.state.currentTable === 'railLoads1'
        ? {
            SCAC: this.state.SCAC,
            carrier: this.state.carrier
          }
        : {
            equipmentType: this.state.equipmentType,
            abbreviation: this.state.abbreviation
          };
    this.props.initUpdateRow(this.state.currentTable, this.props.data.id, row);
  };

  handleDelete = () => {
    this.props.initDeleteRow(this.state.currentTable, this.props.data.id);
  };

  componentDidMount() {
    this.updateCurrentTable();
    this.updateInputs();
  }

  render() {
    const color = colors[this.props.location.pathname].dark;
    const footers = {
      1: (
        <div className="Modal__footer">
          <button style={{ background: color }} type="submit">
            Save
          </button>
          <Delete handleClick={()=> this.setState({showDeletionConfirmation: true})} />
        </div>
      ),
      2: (
        <div className="Modal__footer">
          <div className="Modal__buttonGroup">
            <button className="Modal__button-secondary" style={{ borderColor: color, color }} type="button" onClick={this.handleDelete}>
              Delete
            </button>
            <button style={{ background: color}} type="button" onClick={()=> this.setState({showDeletionConfirmation: false})}>
              Keep
            </button>
          </div>
          <div className="Modal__error" style={{ color }}>
            Are you sure you want to delete this row?
          </div>
        </div>
      )
    };
    const tables = {
      railLoads1 : (
        <form className="Modal__form" onSubmit={this.handleSubmit}>
          <div className="Modal__label">SCAC</div>
          <input className="Modal__input" type="text" required value={this.state.SCAC} onChange={e => this.handleInput(e, "SCAC")} />
          <div className="Modal__label">Carrier</div>
          <input className="Modal__input" type="text" value={this.state.carrier} onChange={e => this.handleInput(e, "carrier")} />
          {!this.state.showDeletionConfirmation ? footers[1] : footers[2]}
        </form>
      ),
      railLoads2 : (
        <form className="Modal__form" onSubmit={this.handleSubmit}>
          <div className="Modal__label">Equipment type</div>
          <input className="Modal__input" type="text" value={this.state.equipmentType} onChange={e => this.handleInput(e, "equipmentType")} />
          <div className="Modal__label">Abbreviation</div>
          <input className="Modal__input" type="text" value={this.state.abbreviation} onChange={e => this.handleInput(e, "abbreviation")} />
          {!this.state.showDeletionConfirmation ? footers[1] : footers[2]}
        </form>
      )
    };
    

    return (
      <div className="EditRailLoadsRow">
        <div className="Modal__title">Edit row</div>
        {tables[this.state.currentTable]}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initUpdateRow: (table, id, row) => dispatch(actionCreators.initUpdateRow(table, id, row)),
    initDeleteRow: (table, id) => dispatch(actionCreators.initDeleteRow(table, id))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(EditRailLoadsRow)
);
