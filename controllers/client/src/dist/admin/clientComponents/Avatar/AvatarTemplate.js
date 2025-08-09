import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import Avatar from './Avatar';
const AvatarTemplate = () => {
    const popop = document.getElementById("uploadImagePopup");
    const avatarMounter = document.getElementById("avatar__container");
    const containerWrapper = document.getElementById("avatar__container--wrapper");
    return ReactDOM.createPortal(_jsx(Avatar, { popup: popop, avatarMounter: avatarMounter }), containerWrapper);
};
export default AvatarTemplate;
