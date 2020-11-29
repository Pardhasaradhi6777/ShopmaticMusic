import actionTypes from './action.types'
import { CELLULAR, OFFLINE, ONLINE } from '../../constants/string.constants'

// Action which enables loader
export const showLoader = () => {
  return {
    type: actionTypes.SHOW_LOADER
  }
}

// Action which disables loader
export const hideLoader = () => {
  return {
    type: actionTypes.HIDE_LOADER
  }
}
