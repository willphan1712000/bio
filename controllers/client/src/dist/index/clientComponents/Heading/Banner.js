"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const Signin_1 = __importDefault(require("../Signin"));
const Template_1 = __importDefault(require("../Template"));
const Banner = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "lg:p-[100px] p-[40px] flex flex-row justify-center max-w-[1500px]", children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex lg:flex-row flex-col content-center w-full justify-between items-center', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col lg:w-[70%] w-full', children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[50px] font-bold", children: clientConfig_1.default.heading.title }), (0, jsx_runtime_1.jsxs)("p", { className: "text-[25px] font-bold", children: [clientConfig_1.default.heading.des1, (0, jsx_runtime_1.jsx)("span", { className: "text-[25px] font-bold py-2 px-3 text-white bg-[--primary] rounded-full", children: clientConfig_1.default.heading.desSpan }), clientConfig_1.default.heading.des2] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex lg:flex-row flex-col gap-5 pt-10", children: [(0, jsx_runtime_1.jsx)(Signin_1.default, { title: 'Create Your Profile Now', size: "4", color: "purple" }), (0, jsx_runtime_1.jsx)(Template_1.default, { title: "Explore Templates", size: "4", color: "cyan" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-[20%] rounded-[40px] overflow-hidden lg:flex hidden max-w-[400px]", children: (0, jsx_runtime_1.jsx)("img", { src: "/controllers/client/img/ip.png", className: "size-full" }) })] }) }));
};
exports.default = Banner;
