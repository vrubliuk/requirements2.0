import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes"
import { logIn, logOut } from "./auth";
import { addRequirement } from "./requirements";
import { fetchDatabase} from "./global";



export function* watchAuth() {
  yield takeEvery(actionTypes.LOG_IN, logIn);
  yield takeEvery(actionTypes.LOG_OUT, logOut);
}

export function* watchRequirements() {
  yield takeEvery(actionTypes.ADD_REQUIREMENT, addRequirement);
}

export function* watchGlobal() {
  yield takeEvery(actionTypes.FETCH_DATABASE, fetchDatabase);
}



