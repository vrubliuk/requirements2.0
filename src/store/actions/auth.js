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

export const logIn = (email, password) => {
  return {
    type: actionTypes.LOG_IN,
    email,
    password
  }
}

export const logOut = () => {
  return {
    type: actionTypes.LOG_OUT
  }
}
