import * as actionTypes from './actionTypes'

export const openInModal = (component) => {
  return {
    type: actionTypes.OPEN_IN_MODAL,
    component
  }
}