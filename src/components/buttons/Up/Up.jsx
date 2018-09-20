import React, { Component } from "react";
import "./Up.css";
import colors from "../../../assets/colors";
import { withRouter } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

class Up extends Component {
  state = {
    show: false
  };

  handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  watchTop = () => {
    this.setState({
      show: document.documentElement.scrollTop > 25 ? true : false
    });
  };

  componentDidMount() {
    this.watchTop();
    window.addEventListener("scroll", this.watchTop);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.watchTop);
  }

  render() {
    const color = colors[this.props.location.pathname].dark;

    return this.state.show ? (
      <div className="Up" style={{ background: color }} onClick={this.handleClick}>
        <i className="fa fa-chevron-up" aria-hidden="true" />
      </div>
    ) : null;
  }
}

export default withRouter(Up);
