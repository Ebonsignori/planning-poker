import { CLOSE_MODAL, OPEN_MODAL, OPEN_WITH_CONTENT } from '../constants/action_types'

// Opens (displays) a react-modal on dispatch
export function openModal (modalToOpen, openWithContentObj) {
  return dispatch => {
    if (openWithContentObj) {
      dispatch({
        type: OPEN_WITH_CONTENT,
        ...openWithContentObj
      })
    }
    dispatch({
      type: OPEN_MODAL,
      modalToOpen
    })
  }
}

// Closes a react-modal on dispatch
export function closeModal (modalToClose) {
  return {
    type: CLOSE_MODAL,
    modalToClose
  }
}
