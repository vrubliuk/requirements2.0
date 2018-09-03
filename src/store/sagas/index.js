import { takeEvery, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { logIn, logOut, updateTokens } from "./auth";
import { initAddRow, initUpdateRow, initDeleteRow } from "./data";
import { updateData } from "./global";

export function* watchAuth() {
  yield all([takeLatest(actionTypes.LOG_IN, logIn), takeLatest(actionTypes.LOG_OUT, logOut), takeEvery(actionTypes.UPDATE_TOKENS, updateTokens)]);
}

export function* watchData() {
  yield all([takeLatest(actionTypes.INIT_ADD_ROW, initAddRow), takeLatest(actionTypes.INIT_UPDATE_ROW, initUpdateRow), takeLatest(actionTypes.INIT_DELETE_ROW, initDeleteRow)]);
}

export function* watchGlobal() {
  yield takeEvery(actionTypes.UPDATE_DATA, updateData);
}
