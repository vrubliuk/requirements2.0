import React, { Component } from "react";
import "./EditRequirementsRow.css";
import colors from "../../../assets/colors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../../store/actions/actionCreators";

class EditRequirementsRow extends Component {
  state = {
    сustomer: "",
    documentation: "",
    releaseSheetLink: "",
    releaseSheetAE: ""
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
    this.props.initUpdateRow("requirements", this.props.data.id, {
      сustomer: this.state.сustomer,
      documentation: this.state.documentation,
      releaseSheetLink: this.state.releaseSheetLink,
      releaseSheetAE: this.state.releaseSheetAE
    });
  };

  handleDelete = () => {
    this.props.initDeleteRow("requirements", this.props.data.id)
  }

  componentDidMount() {
   
    this.updateInputs();
  }

  render() {
    const color = colors[this.props.location.pathname].dark;
    return (
      <div className="EditRequirementsRow">
        <div className="Modal__title">Edit requirement</div>
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
            <button style={{ background: color }} type="submit">
              Save
            </button>
            <button className="Modal__button-secondary" style={{ borderColor: color, color }} type="button" onClick={this.handleDelete}>
              Delete
            </button>
          </div>
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
  )(EditRequirementsRow)
);
