import * as actionTypes from "../actions/actionTypes";
import updateState from "../utility/updateState";

const initialState = {
  requirements: {},
  offices: {},
  railLoads1: {},
  railLoads2: {}
};

const setData = (state, action) => {
  return updateState(state, { [action.table]: action.payload ? action.payload : {} });
};

const setRow = (state, action) => {
  let table = { ...state[action.table] };
  table[action.id] = action.row;
  return updateState(state, { [action.table]: table });
};

const deleteRow = (state, action) => {
  let table = { ...state[action.table] };
  delete table[action.id]
  return updateState(state, { [action.table]: table });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return setData(state, action);
    case actionTypes.SET_ROW:
      return setRow(state, action);
    case actionTypes.DELETE_ROW:
      return deleteRow(state, action);
    default:
      return state;
  }
};

export default reducer;
