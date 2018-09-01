import * as actionTypes from './actionTypes'

export const setSpinner = (value) => {
  return {
    type: actionTypes.SET_SPINNER,
    value
  }
}

export const showInModal = (component, data) => {
  return {
    type: actionTypes.SHOW_IN_MODAL,
    component,
    data
  }
}

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
    
  }
}

export const toggleError = () => {
  return {
    type: actionTypes.TOGGLE_ERROR
  };
};

export const setFilter = (payload) => {
  return {
    type: actionTypes.SET_FILTER,
    payload
  }
}

export const setLoader = (payload) => {
  return {
    type: actionTypes.SET_LOADER,
    payload
  }
}
