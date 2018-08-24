import * as actionTypes from "../actions/actionTypes";
import updateState from "../utility/updateState";

const initialState = {
  modal: null
};

const showInModal = (state, action) => {
  return updateState(state, {
    modal: action.component
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_IN_MODAL:
      return showInModal(state, action);
    default:
      return state;
  }
};

export default reducer;
