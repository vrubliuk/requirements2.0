import React, { Component, Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import * as actionCreators from "./store/actions/actionCreators";
import Spinner from "./components/Spinner/Spinner.jsx";
import Navigation from "./components/Navigation/Navigation";
import Log from "./components/buttons/Log/Log.jsx";
import Requirements from "./containers/Requirements/Requirements.jsx";
import Offices from "./containers/Offices/Offices.jsx";
import RailLoads from "./containers/RailLoads/RailLoads.jsx";
import Modal from "./containers/Modal/Modal.jsx";
import Add from "./components/buttons/Add/Add.jsx";
import Up from "./components/buttons/Up/Up.jsx";

class App extends Component {
  state = {
    showUp: false
  };

  watchTop = () => {
    this.setState({
      showUp: document.documentElement.scrollTop > 25 ? true : false
    });
  };

  componentDidMount() {
    this.props.updateData();
    this.interval = setInterval(() => this.props.updateData(), 1800000);
    this.watchTop();
    window.addEventListener("scroll", this.watchTop);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener("scroll", this.watchTop);
  }

  render() {
    return (
      <div className="App">
        {this.props.spinner ? (
          <Spinner />
        ) : (
          <Fragment>
            <Navigation />
            <Log />
            <Switch>
              <Route path="/" exact component={Requirements} />
              <Route path="/offices" exact component={Offices} />
              <Route path="/rail-loads" exact component={RailLoads} />
              <Redirect to="/" />
            </Switch>
            {this.props.token && <Add />}
            {this.state.showUp && <Up />}
            {this.props.modal && <Modal />}
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spinner: state.temp.spinner,
    modal: state.temp.modal,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateData: () => dispatch(actionCreators.updateData())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
