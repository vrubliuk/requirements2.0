import * as actionTypes from "../actions/actionTypes";
import updateState  from "../utility/updateState";

const initialState = {
  requirements: {},
  offices: {},
  railLoads1: {},
  railLoads2: {},
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.SET_TOKEN:
    //   return setToken(state, action);
    // case actionTypes.TOGGLE_ERROR:
    //   return toggleError(state);
    default:
      return state;
  }
};

export default reducer;