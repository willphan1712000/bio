"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clientConfig_1 = __importDefault(require("../../../clientConfig"));
const Mobile = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "lg:hidden flex", children: [(0, jsx_runtime_1.jsxs)("div", { className: 'h-[100dvh] w-full flex justify-center items-center', children: [(0, jsx_runtime_1.jsx)("h1", { children: clientConfig_1.default.templates.basic.heading }), (0, jsx_runtime_1.jsx)("p", { children: clientConfig_1.default.templates.basic.des })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'h-[100dvh] w-full flex justify-center items-center', children: [(0, jsx_runtime_1.jsx)("h1", { children: clientConfig_1.default.templates.basic.heading }), (0, jsx_runtime_1.jsx)("p", { children: clientConfig_1.default.templates.basic.des })] })] }));
};
exports.default = Mobile;
