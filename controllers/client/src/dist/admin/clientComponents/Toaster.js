"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Toaster = ({ msg }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { id: "toaster", children: [(0, jsx_runtime_1.jsxs)("div", { className: "msg successMsg", children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-check" }), (0, jsx_runtime_1.jsx)("p", { children: "Updated!" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "msg errorMsg", children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-x" }), (0, jsx_runtime_1.jsx)("p", { children: "Internal Error!" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "msg notValidForm", children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-x" }), (0, jsx_runtime_1.jsx)("p", { children: msg })] })] }));
};
exports.default = Toaster;
