import { useReducer } from "react";
import handleAdminContext, { Action, AdminImageContext, State, username } from "../AdminContext";
import AvatarButton from "./AvatarButton";
import AvatarFrame from "./AvatarFrame";

function reducer(state: State, action: Action): any {
    switch(action.type) {
        case 'upload':
            return {
                ...state,
                isUpload: !state.isUpload
            }
        case 'main':
            return {
                ...state,
                mainSrc: action.value
            }
        case 'preview':
            return {
                ...state,
                previewSrc: action.value
            }
        case 'delete':
            return {
                ...state,
                isDelete: !state.isDelete
            }
        default:
            throw new Error("Unknown action type")
    }
}

const Avatar = () => {
    const data = handleAdminContext()

    const [state, dispatch] = useReducer(reducer, {
        isUpload: false,
        mainSrc: `${data.image === null ? '/controllers/client/img/unknown.png': `/user/${username()}/${data.image}`}`,
        previewSrc: undefined,
        isDelete: data.image !== null,
    })

  return (
    <>
        <AdminImageContext.Provider value={[state, dispatch]}>
            <AvatarFrame />
            <AvatarButton />
        </AdminImageContext.Provider>
    </>
  )
}

export default Avatar
