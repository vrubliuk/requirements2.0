import * as actionTypes from "./actionTypes";

export const addRequirement = (сustomer, documentation, releaseSheetLink, releaseSheetAE) => {
  return {
    type: actionTypes.ADD_REQUIREMENT,
    сustomer,
    documentation,
    releaseSheetLink,
    releaseSheetAE
  };
};
