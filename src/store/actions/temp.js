import * as actionTypes from './actionTypes'

export const showInModal = (component) => {
  return {
    type: actionTypes.SHOW_IN_MODAL,
    component
  }
}