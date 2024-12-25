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
const W_1 = require("../../../client/src/Web-Development/W");
const AdminContext_1 = require("../AdminContext");
const AvatarImg_1 = __importDefault(require("./AvatarImg"));
const AvatarButton = () => {
    const [state, dispatch] = (0, AdminContext_1.handleAdminImageContext)();
    const className = 'absolute flex flex-row bg-[#f0f0f0] p-[5px] rounded-[10px] cursor-pointer';
    const uploadRef = (0, react_1.useRef)(null);
    function handleEdit() {
        dispatch({ type: 'upload' });
    }
    (0, react_1.useEffect)(() => {
        (0, W_1.$$)(uploadRef.current).uploadFile(e => {
            dispatch({ type: 'upload' });
            dispatch({ type: 'preview', value: e });
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "avatar__wrapper relative h-auto w-auto", children: [(0, jsx_runtime_1.jsxs)("div", { ref: uploadRef, className: `upload bottom-[-10px] right-[-10px] ${className}`, children: [(0, jsx_runtime_1.jsx)(io5_1.IoCloudUploadOutline, { size: "23", className: "mr-[5px]" }), "Upload"] }), state.isEdit && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: `upload bottom-0 left-0 ${className}`, children: (0, jsx_runtime_1.jsx)(ri_1.RiResetLeftFill, { size: "23" }) }), (0, jsx_runtime_1.jsx)("div", { onClick: () => handleEdit(), className: `upload top-0 right-0 ${className}`, children: (0, jsx_runtime_1.jsx)(md_1.MdEdit, { size: "23" }) })] })), (0, jsx_runtime_1.jsx)("div", { className: `delete left-0 top-0 bg-[red] text-white ${className}`, children: (0, jsx_runtime_1.jsx)(fa_1.FaTrash, { size: "25" }) }), (0, jsx_runtime_1.jsx)(AvatarImg_1.default, {})] }));
};
exports.default = AvatarButton;
