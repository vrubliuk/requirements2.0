import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes"
import { logIn, logOut, updateTokens } from "./auth";
import { initAddRow, initUpdateRow, initDeleteRow } from "./data";
import { updateData} from "./global";

export function* watchAuth() {
  yield takeEvery(actionTypes.LOG_IN, logIn);
  yield takeEvery(actionTypes.LOG_OUT, logOut);
  yield takeEvery(actionTypes.UPDATE_TOKENS, updateTokens);
}

export function* watchRequirements() {
  yield takeEvery(actionTypes.INIT_ADD_ROW, initAddRow);
  yield takeEvery(actionTypes.INIT_UPDATE_ROW, initUpdateRow);
  yield takeEvery(actionTypes.INIT_DELETE_ROW, initDeleteRow);
}

export function* watchGlobal() {
  yield takeEvery(actionTypes.UPDATE_DATA, updateData);
}



