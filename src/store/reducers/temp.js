import * as actionTypes from "../actions/actionTypes";
import updateState from "../utility/updateState";

const initialState = {
  modal: null
};

const openInModal = (state, action) => {
  return updateState(state, {
    modal: action.component
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_IN_MODAL:
      return openInModal(state, action);
    default:
      return state;
  }
};

export default reducer;
