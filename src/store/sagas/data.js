// import { delay } from "redux-saga";
import { put, select } from "redux-saga/effects";
import * as actionCreators from "../actions/actionCreators";
import * as API from "../utility/API";

export function* initAddRow(action) {
  const state = yield select();
  try {
    const res = yield API.postRow(action.table, state.auth.token, action.row);
    yield put(actionCreators.addRow(action.table, res.data.name, action.row));
    yield put(actionCreators.closeModal());
  } catch (err) {
    yield alert("Wasn't able to update the database");
  }
}

export function* initUpdateRow(action) {
  // const state = yield select();
  // try {
  //   const res = yield API.postRow(action.table, state.auth.token, action.row);
  //   yield put(actionCreators.addRow(action.table, res.data.name, action.row));
  //   yield put(actionCreators.closeModal());
  // } catch (err) {
  //   yield alert("Wasn't able to update the database");
  // }
}

export function* initDeleteRow(action) {
  const state = yield select();
  try {
    yield API.deleteRow(action.table, state.auth.token, action.id);
    yield put(actionCreators.deleteRow(action.table, action.id));
    yield put(actionCreators.closeModal());
  } catch (err) {
    yield alert("Wasn't able to update the database");
  }
}
