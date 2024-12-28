import { SaveAction, SaveState } from "../AdminContext"

export default function reducer(state: SaveState, action: SaveAction): any {
    switch(action.type) {
      case 'submit':
        return {
          ...state,
          isSubmitting: !state.isSubmitting 
        }
      case 'show':
        return {
          ...state,
          isShow: !state.isShow
        }
      case 'message':
        return {
          ...state,
          msg: action.value
        }
      case 'disable':
        return {
          ...state,
          disabled: !state.disabled
        }
      case 'default':
        return {
          ...state,
          msg: state.default
        }
      default:
        throw new Error("Unknown action type")
    }
  }