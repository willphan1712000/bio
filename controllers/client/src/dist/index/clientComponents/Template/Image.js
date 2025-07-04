"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Image = react_1.default.forwardRef((props, ref) => {
    const { url } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 opacity-0 size-full p-10 flex flex-row items-center overflow-hidden", ref: ref, children: (0, jsx_runtime_1.jsx)("div", { className: "overflow-hidden rounded-3xl size-full", children: (0, jsx_runtime_1.jsx)("img", { src: url, className: "size-full object-cover", draggable: "false" }) }) }));
});
exports.default = Image;
