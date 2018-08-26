import * as actionTypes from "../actions/actionTypes";
import updateState from "../utility/updateState";

const initialState = {
  spinner: true,
  modal: null,
  error: false
};
const setSpinner = (state, action) => {
  return updateState(state, { spinner: action.value });
};

const showInModal = (state, action) => {
  return updateState(state, { modal: action.component });
};

const toggleError = state => {
  return updateState(state, { error: !state.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SPINNER:
      return setSpinner(state, action);
    case actionTypes.SHOW_IN_MODAL:
      return showInModal(state, action);
      case actionTypes.TOGGLE_ERROR:
      return toggleError(state);
    default:
      return state;
  }
};

export default reducer;
