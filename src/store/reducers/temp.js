import * as actionTypes from "../actions/actionTypes";
import updateState from "../utility/updateState";

const initialState = {
  spinner: true,
  modal: null
};
const setSpinner = (state, action) => {
  return updateState(state, { spinner: action.value });
};

const showInModal = (state, action) => {
  return updateState(state, { modal: action.component });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SPINNER:
      return setSpinner(state, action);
    case actionTypes.SHOW_IN_MODAL:
      return showInModal(state, action);
    default:
      return state;
  }
};

export default reducer;
