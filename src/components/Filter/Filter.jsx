import React, { Component } from "react";
import "./Filter.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";

class Filter extends Component {
  state = {
    letter: null,
    word: "",
    by: "customer",
    showByList: false,
    additionalInputStyle: null
  };
  setFilterAs = type => {
    this.props.setFilter({
      type,
      value: type === "word" ? this.state.word.trim().toLowerCase() : this.state.letter,
      by: this.state.by
    });
  };
  updateFilterBy = () => {
    this.props.filter !== null &&
      this.props.setFilter({
        type: this.props.filter.type,
        value: this.props.filter.value,
        by: this.state.by
      });
  };
  clearFilter = () => {
    this.props.setFilter(null);
  };

  toggleInputStyle = () => {
    this.state.word ? this.setState({ additionalInputStyle: { width: this.props.width, borderRight: "4px solid #333333" } }) : this.setState({ additionalInputStyle: null });
  };

  handleClickCaret = () => {
    this.setState(prevState => {
      return {
        showByList: !prevState.showByList
      };
    });
  };

  handleClickBy = by => {
    this.setState({ by }, () => {
      this.updateFilterBy();
    });
  };

  handleInputFocus = () => {
    this.setState(
      {
        letter: null
      },
      () => {
        this.state.word ? this.setFilterAs("word") : this.clearFilter();
      }
    );
  };

  handleInputChange = e => {
    this.setState({ word: e.target.value }, () => {
      this.state.word ? this.setFilterAs("word") : this.clearFilter();
      this.toggleInputStyle();
    });
  };

  handleClickLetter = letter => {
    letter === this.state.letter
      ? this.setState({ letter: null, word: "" }, () => {
          this.clearFilter();
        })
      : this.setState({ letter: letter, word: "" }, () => {
          this.setFilterAs("letter");
        });
  };

  render() {
    const byList = ["customer", "documentation"].map((by, i) => {
      return (
        <div className="Filter__dropdown__item" onClick={this.handleClickBy.bind(this, by)} key={i}>
          <div className="Filter__icon">
            <i className={`fa fa${this.state.by === by ? "-check" : ""}-circle`} aria-hidden="true" />
          </div>
          <div>By {by}</div>
        </div>
      );
    });

    const letters = ["0-9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].map((letter, i) => {
      return (
        <div className={`Filter__letter ${this.state.letter === letter ? "Filter__letter-active" : ""}`} onClick={this.handleClickLetter.bind(this, letter)} key={i}>
          {letter}
        </div>
      );
    });

    return (
      <div className="Filter" style={{ width: this.props.width, top: this.props.top }}>
        <div className="Filter__part">
          <div className="Filter__icon Filter__icon-caret" onClick={this.handleClickCaret}>
            <i className={`fa fa-caret-${this.state.showByList ? "up" : "down"}`} aria-hidden="true" />
          </div>
          <div className="Filter__icon Filter__icon-search">
            <i className="fa fa-search" aria-hidden="true" />
          </div>
          <input className="Filter__input" style={this.state.additionalInputStyle} type="text" value={this.state.word} onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
          {this.state.showByList && <div className="Filter__dropdown">{byList}</div>}
        </div>
        <div className="Filter__part">
          <div className="Filter__letters">{letters}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.temp.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: payload => dispatch(actionCreators.setFilter(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
