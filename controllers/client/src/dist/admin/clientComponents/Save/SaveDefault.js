"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SaveDefault;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_spinners_1 = require("react-spinners");
const Save_1 = __importDefault(require("./Save"));
const react_1 = require("react");
function SaveDefault() {
    const [isSubmitting, setSubmit] = (0, react_1.useState)(false);
    const [isDone, setDone] = (0, react_1.useState)(false);
    const [msg, setMsg] = (0, react_1.useState)('Save');
    return ((0, jsx_runtime_1.jsx)("div", { className: 'flex justify-center items-center sticky bottom-0 z-[99]', children: (0, jsx_runtime_1.jsxs)("div", { className: `saveDefaultButtonStyle ${isDone ? 'saveDefaultButtonGlowingStyle' : ''}`, children: [(0, jsx_runtime_1.jsxs)("span", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)("p", { className: 'mx-[10px]', children: msg }), " ", (0, jsx_runtime_1.jsx)(react_spinners_1.ClipLoader, { size: "20px", color: '#000', loading: isSubmitting })] }), (0, jsx_runtime_1.jsx)(Save_1.default, { setSubmit: setSubmit, setDone: setDone, setMsg: setMsg })] }) }));
}
