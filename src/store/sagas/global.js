import { delay } from "redux-saga";
import { put, select  } from "redux-saga/effects";
import * as actionCreators from "../actions/actionCreators";
import * as API from "../utility/API";
import {updateTokens} from "./auth"


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

export function* updateDatabase() {
  if (localStorage.refreshTokenRequirements) {
    yield updateTokens()
    yield fetchDatabase()
    // yield delay(1500) UNCOMMENT LATER
    yield put(actionCreators.setSpinner(false))

  } else {
    yield fetchDatabase()
    // yield delay(1500) UNCOMMENT LATER
    yield put(actionCreators.setSpinner(false))
  }
}