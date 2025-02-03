"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const Avatar_1 = __importDefault(require("./Avatar"));
const AvatarTemplate = () => {
    const popop = document.getElementById("uploadImagePopup");
    const avatarMounter = document.getElementById("avatar__container");
    const containerWrapper = document.getElementById("avatar__container--wrapper");
    return react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)(Avatar_1.default, { popup: popop, avatarMounter: avatarMounter }), containerWrapper);
};
exports.default = AvatarTemplate;
