import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  state = {
    letter: null,
    word: "",
    by: "customer",
    showByList: false
  };
  handleClickLetter = letter => {
    letter === this.state.letter ? this.setState({ letter: null }) : this.setState({ letter: letter });
  };

  render() {
    const byList = ["customer", "documentation"].map(byItem => {
      return (
        <div className="Filter__dropdown__item" onClick={() => this.setState({ by: byItem })}>
          <div className="Filter__icon">
            <i className={`fa fa${this.state.by === byItem ? "-check" : ""}-circle`} aria-hidden="true" />
          </div>
          <div>By {byItem}</div>
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
          <div className="Filter__icon Filter__icon-caret" onClick={() => this.setState({ showByList: !this.state.showByList })}>
            <i className={`fa fa-caret-${this.state.showByList ? "up" : "down"}`} aria-hidden="true" />
          </div>
          <div className="Filter__icon Filter__icon-search">
            <i className="fa fa-search" aria-hidden="true" />
          </div>
          <input className="Filter__input" type="text" />
          {this.state.showByList && <div className="Filter__dropdown">{byList}</div>}
        </div>
        <div className="Filter__part">
          <div className="Filter__letters">{letters}</div>
        </div>
      </div>
    );
  }
}

export default Filter;
