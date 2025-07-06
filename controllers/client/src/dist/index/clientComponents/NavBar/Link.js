"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const Link = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("a", { href: "/@template", className: "hover:bg-[#f5f5f7] p-[10px] rounded-[10px]", children: "Templates" }), (0, jsx_runtime_1.jsx)("a", { href: `${clientConfig_1.default.domain}/about-us`, className: "hover:bg-[#f5f5f7] p-[10px] rounded-[10px]", children: "About us" }), (0, jsx_runtime_1.jsx)("a", { href: `${clientConfig_1.default.domain}/terms`, className: "hover:bg-[#f5f5f7] p-[10px] rounded-[10px]", children: "Terms & Privacy" }), (0, jsx_runtime_1.jsx)("a", { href: `${clientConfig_1.default.domain}/blog`, className: "hover:bg-[#f5f5f7] p-[10px] rounded-[10px]", children: "Blogs" })] }));
};
exports.default = Link;
