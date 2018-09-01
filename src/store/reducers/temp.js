import * as actionTypes from "../actions/actionTypes";
import updateState from "../utility/updateState";

const initialState = {
  spinner: true,
  modal: null,
  error: false,
  filter: null,
  loader: false
};

const setSpinner = (state, action) => {
  return updateState(state, { spinner: action.value });
};

const showInModal = (state, action) => {
  return updateState(state, { modal: {component: action.component,
    data: action.data
  }});
};

const closeModal = (state) => {
  return updateState(state, { modal: null });
};

const toggleError = state => {
  return updateState(state, { error: !state.error });
};

const setFilter = (state, action) => {
  return updateState(state, { filter: action.payload });
};

const setLoader = (state, action) => {
  return updateState(state, { loader: action.payload });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SPINNER:
      return setSpinner(state, action);
    case actionTypes.SHOW_IN_MODAL:
      return showInModal(state, action);
    case actionTypes.CLOSE_MODAL:
      return closeModal(state)
    case actionTypes.TOGGLE_ERROR:
      return toggleError(state);
    case actionTypes.SET_FILTER:
      return setFilter(state, action);
      case actionTypes.SET_LOADER:
      return setLoader(state, action);
    default:
      return state;
  }
};

export default reducer;
