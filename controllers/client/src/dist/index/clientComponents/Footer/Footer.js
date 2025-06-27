"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Logo_1 = __importDefault(require("../Logo"));
const TemplateButton_1 = __importDefault(require("../TemplateButton"));
const Info_1 = __importDefault(require("./Info"));
const Social_1 = __importDefault(require("./Social"));
const Footer = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'bg-black mt-5 p-[30px] w-full flex flex-row justify-center', children: (0, jsx_runtime_1.jsxs)("div", { className: ' max-w-[1000px]', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start', children: [(0, jsx_runtime_1.jsx)("div", { className: 'flex-1 w-[50%] max-w-[300px]', children: (0, jsx_runtime_1.jsx)(Logo_1.default, {}) }), (0, jsx_runtime_1.jsx)(Info_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-[2] flex-col items-center gap-5', children: [(0, jsx_runtime_1.jsx)(TemplateButton_1.default, { onClick: () => window.location.href = '/@template' }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-row gap-4', children: [(0, jsx_runtime_1.jsx)(TemplateButton_1.default, { content: 'Sign In', onClick: () => window.location.href = '/@signin' }), (0, jsx_runtime_1.jsx)(TemplateButton_1.default, { content: 'Sign Up', onClick: () => window.location.href = '/@signup' })] })] })] }), (0, jsx_runtime_1.jsx)(Social_1.default, {})] }) }));
};
exports.default = Footer;
