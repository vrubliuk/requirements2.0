import * as actionTypes from "./actionTypes";

export const setToken = token => {
  return {
    type: actionTypes.SET_TOKEN,
    token
  }
}

export const updateTokens = () => {
  return {
    type: actionTypes.UPDATE_TOKENS,
  }
}


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
