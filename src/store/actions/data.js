import * as actionTypes from "./actionTypes";

export const addRow = (table, payload) => {
  return {
    type: actionTypes.ADD_ROW,
    table,
    payload
  };
};
