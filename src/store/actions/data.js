import * as actionTypes from "./actionTypes";

export const setData = (table, payload) => {
  return {
    type: actionTypes.SET_DATA,
    table,
    payload
  }
}
export const setRow = (table, id, row) => {
  return {
    type: actionTypes.SET_ROW,
    table,
    id,
    row
  };
};

export const deleteRow = (table, id) => {
  return {
    type: actionTypes.DELETE_ROW,
    table,
    id
  };
};

export const initAddRow = (table, row) => {
  return {
    type: actionTypes.INIT_ADD_ROW,
    table,
    row
  };
};


export const initUpdateRow = (table, id, row) => {
  return {
    type: actionTypes.INIT_UPDATE_ROW,
    table,
    id,
    row
  };
};

export const initDeleteRow = (table, id) => {
  return {
    type: actionTypes.INIT_DELETE_ROW,
    table,
    id
  };
};