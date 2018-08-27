import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  state = {
    letter: null,
    word: "",
    by: "customer",
    showByList: false
  };

  letters = ["0-9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  render() {
    const byList = ["customer", "documentation"].map(byItem => {
      return (
        <div className={`Filter__dropdown__item ${this.state.by === byItem ? "Filter__dropdown__item-active" : ""}`} onClick={() => this.setState({ by: byItem })}>
          By {byItem}
        </div>
      );
    });

    return (
      <div className="Filter" style={{width: this.props.width}}>
        <div className="Filter__part">
          <div className="Filter__icon Filter__icon-caret" onClick={() =>  this.setState({showByList: !this.state.showByList})}>
            <i className={`fa fa-caret-${this.state.showByList ? "up" : "down"}`} aria-hidden="true" />
          </div>
          <div className="Filter__icon Filter__icon-search">
            <i className="fa fa-search" aria-hidden="true" />
          </div>
          <input className="Filter__input" type="text" />
          {this.state.showByList && <div className="Filter__dropdown">{byList}</div>}
        </div>
        <div className="Filter__part">A-Z</div>
      </div>
    );
  }
}

export default Filter;
