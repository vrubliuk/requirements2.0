import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes"
import { logIn, logOut, updateTokens } from "./auth";
import { addRow } from "./data";
import { updateDatabase} from "./global";



export function* watchAuth() {
  yield takeEvery(actionTypes.LOG_IN, logIn);
  yield takeEvery(actionTypes.LOG_OUT, logOut);
  yield takeEvery(actionTypes.UPDATE_TOKENS, updateTokens);
}

export function* watchRequirements() {
  yield takeEvery(actionTypes.ADD_ROW, addRow);
}

export function* watchGlobal() {
  yield takeEvery(actionTypes.UPDATE_DATABASE, updateDatabase);
}



