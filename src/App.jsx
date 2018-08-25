import React, { Component, Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner.jsx";
import Navigation from "./components/Navigation/Navigation";
import Log from "./components/buttons/Log/Log.jsx";
import Requirements from "./containers/Requirements/Requirements.jsx";
import OfficeLeaders from "./containers/OfficeLeaders/OfficeLeaders.jsx";
import RailLoads from "./containers/RailLoads/RailLoads.jsx";
import Modal from "./hoc/Modal/Modal";

class App extends Component {
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
              <Route path="/office-leaders" exact component={OfficeLeaders} />
              <Route path="/rail-loads" exact component={RailLoads} />
              <Redirect to="/" />
            </Switch>
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
    modal: state.temp.modal
  };
};

export default withRouter(connect(mapStateToProps)(App));
