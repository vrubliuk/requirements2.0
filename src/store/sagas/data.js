import { delay } from "redux-saga";
import { put, select } from "redux-saga/effects";
import * as actionCreators from "../actions/actionCreators";
import * as API from "../utility/API";

export function* addRow(action) {
  const state = yield select();
  // let request;
  // switch (action.table) {
  //   case "requirements":
  //     request = API.postRequirement(state.auth.token, action.payload);
  //     break;
  //   case "offices":
  //     request = API.postOffices(state.auth.token, action.payload);
  //     break;
  //   case "railLoads1":
  //     request = API.postRailLoads1(state.auth.token, action.payload);
  //     break;
  //   case "railLoads2":
  //     request = API.postRailLoads2(state.auth.token, action.payload);
  //     break;
  //   default:
  //     break;
  // }
  try {
    const res = yield API.postRow(action.table, state.auth.token, action.payload);
    yield console.log(res.data);

    // yield (localStorage.refreshToken = res.data.refreshToken);
    // yield put(actionCreators.setToken(res.data.idToken));
    // yield put(actionCreators.showInModal(null));
  } catch (err) {
    // yield put(actionCreators.toggleError());
    // yield delay(2000);
    // yield put(actionCreators.toggleError());
  }
}
