"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Separator = ({ thickness = "1" }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full", style: { height: `${10 * parseInt(thickness)}px` } }));
};
exports.default = Separator;
