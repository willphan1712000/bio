"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ColorType = ({ value, face }) => {
    return ((0, jsx_runtime_1.jsx)("div", { style: { background: value === null || value === void 0 ? void 0 : value.toString() }, className: "size-full flex justify-center items-center pointer-events-none", children: face === undefined ? '' : face }));
};
exports.default = ColorType;
