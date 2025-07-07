"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const Copyright = () => {
    const copyright = `© ${new Date().getFullYear()} Allinclicks. All rights reserved.`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative flex flex-col justify-center items-center w-full text-white", children: [(0, jsx_runtime_1.jsx)("p", { children: copyright }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-3", children: [(0, jsx_runtime_1.jsx)("a", { href: `${clientConfig_1.default.aic.website}/privacy`, target: "", children: "Privacy Policy" }), (0, jsx_runtime_1.jsx)("span", { children: " | " }), (0, jsx_runtime_1.jsx)("a", { href: `${clientConfig_1.default.aic.website}/terms`, target: "", children: "Terms of Use" })] })] }));
};
exports.default = Copyright;
