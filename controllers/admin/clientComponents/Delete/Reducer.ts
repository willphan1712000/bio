import { DeleteState, DeleteAction } from "../AdminContext"

export default function reducer(state: DeleteState, action: DeleteAction): any {
    switch(action.type) {
        case 'show':
            return {
                ...state,
                show: !state.show
            }
        case 'delete':
            return {
                ...state,
                isDeleting : !state.isDeleting
            }
        case 'disable':
            return {
                ...state,
                disabled : !state.disabled
            }
        case 'msg':
            return {
                ...state,
                msg : action.value
            }
        default:
            throw new Error("Unknown action type")
    }
}