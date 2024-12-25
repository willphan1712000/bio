"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const io5_1 = require("react-icons/io5");
const md_1 = require("react-icons/md");
const ri_1 = require("react-icons/ri");
const AvatarFrame_1 = __importDefault(require("./AvatarFrame"));
function reducer(state, action) {
    switch (action.type) {
        case 'edit':
            return { edit: !state.edit, reset: state.reset };
        case 'reset':
            return { edit: state.edit, reset: !state.reset };
        default:
            throw new Error("Unhandled action type");
    }
}
const AvatarController = ({ data }) => {
    const className = 'absolute flex flex-row bg-[#f0f0f0] p-[5px] rounded-[10px] cursor-pointer';
    const srcImg = (data.src === null || data.src === '') ? data.defaultImg : '/user/' + data.username + '/' + data.src;
    const [state, dispatch] = (0, react_1.useReducer)(reducer, { edit: false, reset: false });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(AvatarFrame_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "avatar__wrapper relative h-auto w-auto", children: [(0, jsx_runtime_1.jsxs)("div", { className: `upload bottom-[-10px] right-[-10px] ${className}`, children: [(0, jsx_runtime_1.jsx)(io5_1.IoCloudUploadOutline, { size: "23", className: "mr-[5px]" }), "Upload"] }), (0, jsx_runtime_1.jsxs)("div", { className: `edit top-[-10px] right-[-10px] ${className} ${state.edit ? 'flex' : 'hidden'}`, children: [(0, jsx_runtime_1.jsx)(md_1.MdModeEditOutline, { size: "23", className: "mr-[5px]" }), "Edit"] }), (0, jsx_runtime_1.jsx)("div", { className: `delete left-0 top-0 bg-[red] text-white ${className}`, children: (0, jsx_runtime_1.jsx)(fa_1.FaTrash, { size: "25" }) }), (0, jsx_runtime_1.jsxs)("div", { className: `reset bottom-[-10px] left-[-10px] ${className} ${state.reset ? 'flex' : 'hidden'}`, children: [(0, jsx_runtime_1.jsx)(ri_1.RiResetLeftFill, { size: "23", className: "mr-[5px]" }), "Reset"] }), (0, jsx_runtime_1.jsx)("div", { className: "info__img--location", children: (0, jsx_runtime_1.jsx)("img", { draggable: false, src: srcImg, alt: "avatar_admin" }) })] })] }));
};
exports.default = AvatarController;
