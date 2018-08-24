import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Log from "./components/buttons/Log/Log.jsx";
import Requirements from "./containers/Requirements/Requirements.jsx";
import OfficeLeaders from "./containers/OfficeLeaders/OfficeLeaders.jsx";
import RailLoads from "./containers/RailLoads/RailLoads.jsx";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Log />
        <Switch>
          <Route path="/" exact component={Requirements} />
          <Route path="/office-leaders" exact component={OfficeLeaders} />
          <Route path="/rail-loads" exact component={RailLoads} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
