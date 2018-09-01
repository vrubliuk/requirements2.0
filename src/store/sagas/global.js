// import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import * as actionCreators from "../actions/actionCreators";
import * as API from "../utility/API";
import { updateTokens } from "./auth";

export function* fetchDatabase() {
  try {
    const res = yield Promise.all([API.getData("requirements"), API.getData("offices"), API.getData("railLoads1"), API.getData("railLoads2")]);
    yield put(actionCreators.setData("requirements", res[0].data));
    yield put(actionCreators.setData("offices", res[1].data));
    yield put(actionCreators.setData("railLoads1", res[2].data));
    yield put(actionCreators.setData("railLoads2", res[3].data));
  } catch (err) {
    yield alert("Not able to fetch the database");
  }
}

export function* updateData() {
  if (localStorage.refreshTokenRequirements) {
    yield updateTokens();
    yield fetchDatabase();
    // yield delay(1000) UNCOMMENT LATER
    yield put(actionCreators.setSpinner(false));
  } else {
    yield fetchDatabase();
    // yield delay(1000) UNCOMMENT LATER
    yield put(actionCreators.setSpinner(false));
  }
}
