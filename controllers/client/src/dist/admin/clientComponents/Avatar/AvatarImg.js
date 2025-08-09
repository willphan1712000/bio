import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import Image from '../../../client/src/Web-Development/components/Image';
import { handleAdminImageContext } from '../AdminContext';
const AvatarImg = () => {
    const [state] = handleAdminImageContext();
    if (!state.avatarMounter)
        return (_jsx("div", { className: "overflow-hidden rounded-[50%] aspect-square border-2 border-[#f0f0f0]", children: _jsx(Image, { src: state.mainSrc }) }));
    return ReactDOM.createPortal(_jsx("div", { className: "absolute top-0 left-0 bg-white size-full", children: _jsx(Image, { src: state.mainSrc, objectFit: 'cover' }) }), state.avatarMounter);
};
export default AvatarImg;
