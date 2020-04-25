import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
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

const App = ({ spinner, updateData }) => {
  useEffect(() => {
    updateData();
    setInterval(() => updateData(), 1800000);
  }, []);

  return spinner ? (
    <Spinner />
  ) : (
    <div className="App">
      <Navigation />
      <Log />
      <Switch>
        <Route path="/" exact render={() => <Requirements table="requirements" />} />
        <Route path="/agent" exact render={() => <Requirements table="agentRequirements" />} />
        <Route path="/offices" exact component={Offices} />
        <Route path="/rail-loads" exact component={RailLoads} />
        <Redirect to="/" />
      </Switch>
      <Add />
      <Up />
      <Modal />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    spinner: state.temp.spinner,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: () => dispatch(actionCreators.updateData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
