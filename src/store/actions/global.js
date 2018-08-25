import * as actionTypes from "./actionTypes";

export const fetchDatabase = () => {
  return {
    type: actionTypes.FETCH_DATABASE,
  };
};
