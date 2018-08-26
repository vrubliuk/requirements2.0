import * as actionTypes from "./actionTypes";

export const setData = (table, payload) => {
  return {
    type: actionTypes.SET_DATA,
    table,
    payload
  }
}

export const addRow = (table, payload) => {
  return {
    type: actionTypes.ADD_ROW,
    table,
    payload
  };
};
