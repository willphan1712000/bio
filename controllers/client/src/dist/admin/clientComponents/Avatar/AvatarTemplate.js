"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const Avatar_1 = __importDefault(require("./Avatar"));
const AvatarTemplate = () => {
    const container = document.getElementById("avatar__container");
    return react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)("div", { className: "aspect-square flex justify-center items-center flex-col w-full absolute top-0 left-0 bg-white rounded-full", style: { height: "-webkit-fill-available" }, children: (0, jsx_runtime_1.jsx)(Avatar_1.default, {}) }), container);
};
exports.default = AvatarTemplate;
