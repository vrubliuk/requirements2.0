import { delay } from "redux-saga";
import { put, select  } from "redux-saga/effects";
import * as actionCreators from "../actions/actionCreators";
import * as API from "../utility/API";

export function* fetchDatabase() {
  try {
    const res = yield Promise.all([API.getRequirements(), API.getOffices(), API.getRailLoads1(), API.getRailLoads2()]);
    yield console.log(res);
    
    // yield (localStorage.refreshToken = res.data.refreshToken);
    // yield put(actionCreators.setToken(res.data.idToken));
    // yield put(actionCreators.showInModal(null));
  } catch (err) {
    // yield put(actionCreators.toggleError());
    // yield delay(2000);
    // yield put(actionCreators.toggleError());
  }
}