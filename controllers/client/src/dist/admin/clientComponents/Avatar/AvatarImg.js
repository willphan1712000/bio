"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Image_1 = __importDefault(require("../../../client/src/Web-Development/components/Image"));
const AdminContext_1 = require("../AdminContext");
const AvatarImg = () => {
    const [state] = (0, AdminContext_1.handleAdminImageContext)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "info__img--location overflow-hidden rounded-[50%] aspect-square border-2 border-[#f0f0f0]", children: (0, jsx_runtime_1.jsx)(Image_1.default, { src: state.mainSrc }) }));
};
exports.default = AvatarImg;
