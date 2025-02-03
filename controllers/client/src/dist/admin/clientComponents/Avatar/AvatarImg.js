"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const Image_1 = __importDefault(require("../../../client/src/Web-Development/components/Image"));
const AdminContext_1 = require("../AdminContext");
const AvatarImg = () => {
    const [state] = (0, AdminContext_1.handleAdminImageContext)();
    if (!state.avatarMounter)
        return ((0, jsx_runtime_1.jsx)("div", { className: "overflow-hidden rounded-[50%] aspect-square border-2 border-[#f0f0f0]", children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: state.mainSrc }) }));
    return react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 left-0 bg-white size-full", children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: state.mainSrc, objectFit: 'cover' }) }), state.avatarMounter);
};
exports.default = AvatarImg;
