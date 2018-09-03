import { put, select } from "redux-saga/effects";
import * as actionCreators from "../actions/actionCreators";
import * as API from "../utility/API";

export function* initAddRow(action) {
  yield put(actionCreators.setLoader(true));
  const state = yield select();
  try {
    const res = yield API.postRow(state.auth.token, action.table, action.row);
    yield put(actionCreators.setRow(action.table, res.data.name, action.row));
    yield put(actionCreators.closeModal());
    yield put(actionCreators.setLoader(false));
  } catch (err) {
    yield put(actionCreators.setLoader(false));
    yield alert("Not able to update the database");
  }
}

export function* initUpdateRow(action) {
  yield put(actionCreators.setLoader(true));
  const state = yield select();
  try {
    const res = yield API.patchRow(state.auth.token, action.table, action.id, action.row);
    yield put(actionCreators.setRow(action.table, action.id, res.data));
    yield put(actionCreators.closeModal());
    yield put(actionCreators.setLoader(false));
  } catch (err) {
    yield put(actionCreators.setLoader(false));
    yield alert("Not able to update the database");
  }
}

export function* initDeleteRow(action) {
  yield put(actionCreators.setLoader(true));
  const state = yield select();
  try {
    yield API.deleteRow(state.auth.token, action.table, action.id);
    yield put(actionCreators.deleteRow(action.table, action.id));
    yield put(actionCreators.closeModal());
    yield put(actionCreators.setLoader(false));
  } catch (err) {
    yield put(actionCreators.setLoader(false));
    yield alert("Not able to update the database");
  }
}
