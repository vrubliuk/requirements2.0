import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import * as actionCreators from "../actions/actionCreators";
import * as API from "../utility/API";

export function* logIn(action) {
  yield put(actionCreators.setLoader(true));
  try {
    const res = yield API.postEmailPassword(action.email, action.password);
    yield (localStorage.refreshTokenRequirements = res.data.refreshToken);
    yield put(actionCreators.setToken(res.data.idToken));
    yield put(actionCreators.closeModal());
    yield put(actionCreators.setLoader(false));
  } catch (err) {
    yield put(actionCreators.setLoader(false));
    yield put(actionCreators.toggleError());
    yield delay(2000);
    yield put(actionCreators.toggleError());
  }
}

export function* logOut() {
  yield localStorage.removeItem("refreshTokenRequirements");
  yield put(actionCreators.setToken(null));
}

export function* updateTokens() {
  if (localStorage.refreshTokenRequirements) {
    try {
      const res = yield API.postRefreshToken();
      yield (localStorage.refreshTokenRequirements = res.data.refresh_token);
      yield put(actionCreators.setToken(res.data.id_token));
    } catch (err) {
      yield alert("Not able to update the tokens")
    }
  }
}