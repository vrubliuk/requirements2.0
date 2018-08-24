import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import * as actionCreators from "../actions/actionCreators";
import * as API from "../utility/API";

export function* logIn(action) {
  try {
    const res = yield API.postEmailPassword(action.email, action.password);
    yield (localStorage.refreshToken = res.data.refreshToken);
    yield put(actionCreators.setToken(res.data.idToken));
    yield put(actionCreators.showInModal(null));
  } catch (err) {
    yield put(actionCreators.toggleError());
    yield delay(2000);
    yield put(actionCreators.toggleError());
  }
}

export function* logOut() {
  yield localStorage.removeItem("refreshToken");
  yield put(actionCreators.setToken(null));
}
