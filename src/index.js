import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import auth from "./store/reducers/auth";
import requirements from "./store/reducers/requirements";
import officeLeaders from "./store/reducers/officeLeaders";
import railLoads from "./store/reducers/railLoads";
import temp from "./store/reducers/temp"
import {watchAuth} from "./store/sagas"

const rootReducer = combineReducers({
  auth,
  requirements,
  officeLeaders,
  railLoads,
  temp
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAuth);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
