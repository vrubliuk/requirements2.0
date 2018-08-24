import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes"
import { logIn, logOut } from "./auth";

export function* watchAuth() {
  yield takeEvery(actionTypes.LOG_IN, logIn);
  yield takeEvery(actionTypes.LOG_OUT, logOut);
}
