"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Input_1 = __importDefault(require("../../admin/clientComponents/Input"));
const SocialTag = ({ name, label, data, children }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: `social ${name}`, children: [(0, jsx_runtime_1.jsx)("div", { className: "social__img info__img", children: children }), (0, jsx_runtime_1.jsx)("div", { className: "social__info info__about", children: (0, jsx_runtime_1.jsx)(Input_1.default, { inputLabel: label, inputMode: (name === 'Mobile' || name === 'Work') ? 'numeric' : 'text', inputName: name, data: data }) })] }));
};
exports.default = SocialTag;
