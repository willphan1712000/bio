"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const FontType = ({ value, face }) => {
    return ((0, jsx_runtime_1.jsx)("div", { style: { fontFamily: value.toString() }, children: face === undefined ? '' : face }));
};
exports.default = FontType;