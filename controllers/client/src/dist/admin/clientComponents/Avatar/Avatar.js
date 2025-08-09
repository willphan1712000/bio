import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useReducer } from "react";
import handleAdminContext, { AdminImageContext, username } from "../AdminContext";
import AvatarButton from "./AvatarButton";
import AvatarFrame from "./AvatarFrame";
function reducer(state, action) {
    switch (action.type) {
        case 'upload':
            return Object.assign(Object.assign({}, state), { isUpload: !state.isUpload });
        case 'main':
            return Object.assign(Object.assign({}, state), { mainSrc: action.value });
        case 'preview':
            return Object.assign(Object.assign({}, state), { previewSrc: action.value });
        case 'delete':
            return Object.assign(Object.assign({}, state), { isDelete: !state.isDelete });
        default:
            throw new Error("Unknown action type");
    }
}
const Avatar = ({ popup, avatarMounter }) => {
    const data = handleAdminContext();
    const [state, dispatch] = useReducer(reducer, {
        isUpload: false,
        mainSrc: `${data.image === null ? '/controllers/client/img/unknown.png' : `/user/${username()}/${data.image}`}`,
        previewSrc: undefined,
        isDelete: data.image !== null,
        popup,
        avatarMounter
    });
    return (_jsx(_Fragment, { children: _jsxs(AdminImageContext.Provider, { value: [state, dispatch], children: [_jsx(AvatarFrame, {}), _jsx(AvatarButton, {})] }) }));
};
export default Avatar;
