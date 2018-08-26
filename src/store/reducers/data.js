import * as actionTypes from "../actions/actionTypes";
import updateState  from "../utility/updateState";

const initialState = {
  requirements: {},
  offices: {},
  railLoads1: {},
  railLoads2: {},
};

const setData = (state, action) => {
  return updateState(state, { [action.table]: action.payload });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return setData(state, action);
    default:
      return state;
  }
};

export default reducer;