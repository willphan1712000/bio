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
        case 'edit':
            return {
                ...state,
                isEdit: !state.isEdit
            }
        case 'initial':
            return {
                ...state,
                initialSrc: action.value
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
    }
}

const Avatar = () => {
    const data = handleAdminContext()

    const [state, dispatch] = useReducer(reducer, {
        isUpload: false,
        mainSrc: `${data.image === null ? '/controllers/client/img/unknown.png': `/user/${username()}/${data.image}`}`,
        intialSrc: `${data.image === null ? '/controllers/client/img/unknown.png': `/user/${username()}/${data.image}`}`,
        previewSrc: undefined,
        isEdit: false
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
