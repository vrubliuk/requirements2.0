import * as actionTypes from './actionTypes'

export const setSpinner = (value) => {
  return {
    type: actionTypes.SET_SPINNER,
    value
  }
}

export const showInModal = (component) => {
  return {
    type: actionTypes.SHOW_IN_MODAL,
    component
  }
}

export const toggleError = () => {
  return {
    type: actionTypes.TOGGLE_ERROR
  };
};