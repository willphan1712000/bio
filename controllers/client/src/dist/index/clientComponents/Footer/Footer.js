"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const w_1 = require("@willphan1712000/w");
const Logo_1 = __importDefault(require("../Logo"));
const Info_1 = __importDefault(require("./Info"));
const Social_1 = __importDefault(require("./Social"));
const Copyright_1 = __importDefault(require("./Copyright"));
const Footer = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'bg-[#111113] mt-5 p-[30px] w-full flex flex-row justify-center', children: (0, jsx_runtime_1.jsxs)("div", { className: ' max-w-[1000px]', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start', children: [(0, jsx_runtime_1.jsx)("div", { className: 'flex-1 w-[50%] max-w-[300px]', children: (0, jsx_runtime_1.jsx)(Logo_1.default, {}) }), (0, jsx_runtime_1.jsx)(Info_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-[2] flex-col items-center gap-5', children: [(0, jsx_runtime_1.jsx)(w_1.Button, { onClick: () => window.location.href = '/@template', type: "gradient", content: 'Templates' }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-row gap-4', children: [(0, jsx_runtime_1.jsx)(w_1.Button, { onClick: () => window.location.href = '/@signin', type: "solid", content: 'Sign in' }), (0, jsx_runtime_1.jsx)(w_1.Button, { onClick: () => window.location.href = '/@signup', type: "solid", content: 'Sign up' })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: 'border-b-[1px] border-b-white p-10' }), (0, jsx_runtime_1.jsx)(Social_1.default, {}), (0, jsx_runtime_1.jsx)(Copyright_1.default, {})] }) }));
};
exports.default = Footer;
