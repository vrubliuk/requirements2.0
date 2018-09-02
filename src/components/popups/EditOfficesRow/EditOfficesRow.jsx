import React, { Component } from "react";
import "./EditOfficesRow.css";
import colors from "../../../assets/colors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../../store/actions/actionCreators";
import Delete from "../../buttons/Delete/Delete.jsx";

class EditOfficesRow extends Component {
  state = {
    office: "",
    abbreviation: "",
    leader: "",
    GSM: "",
    showDeletionConfirmation: false
  };

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
    this.props.initUpdateRow("offices", this.props.data.id, {
      office: this.state.office.trim(),
      abbreviation: this.state.abbreviation.trim(),
      leader: this.state.leader.trim(),
      GSM: this.state.GSM.trim()
    });
  };

  handleDelete = () => {
    this.props.initDeleteRow("offices", this.props.data.id);
  };

  componentDidMount() {
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



    return (
      <div className="EditOfficesRow">
        <div className="Modal__title">Edit row</div>
        <form className="Modal__form" onSubmit={this.handleSubmit}>
          <div className="Modal__label">Office</div>
          <input className="Modal__input" type="text" required value={this.state.office} onChange={e => this.handleInput(e, "office")} />
          <div className="Modal__label">Abbreviation</div>
          <input className="Modal__textarea" type="text" required value={this.state.abbreviation} onChange={e => this.handleInput(e, "abbreviation")} />
          <div className="Modal__label">Leader</div>
          <input className="Modal__input" type="text" required value={this.state.leader} onChange={e => this.handleInput(e, "leader")} />
          <div className="Modal__label">GSM</div>
          <input className="Modal__input" type="text" required value={this.state.GSM} onChange={e => this.handleInput(e, "GSM")} />
          {!this.state.showDeletionConfirmation ? footers[1] : footers[2]}
        </form>
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
  )(EditOfficesRow)
);
