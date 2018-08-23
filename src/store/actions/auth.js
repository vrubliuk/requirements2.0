import * as actionTypes from "./actionTypes";

export const setToken = token => {
  return {
    type: actionTypes.SET_TOKEN,
    token
  }
}

export const toggleError = () => {
  return {
    type: actionTypes.TOGGLE_ERROR
  };
};
