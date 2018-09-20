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
  componentDidMount() {
    this.props.updateData();
    this.interval = setInterval(() => this.props.updateData(), 1800000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
            <Add />
            <Up />
            <Modal />
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spinner: state.temp.spinner
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
