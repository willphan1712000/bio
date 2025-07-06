"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const Social = () => {
    const style = 'border-white border-[2px] p-[5px] rounded-full size-[40px] flex flex-row justify-center items-center';
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'text-white flex flex-row justify-center items-center gap-5 text-[20px] py-[30px]', children: [(0, jsx_runtime_1.jsx)("div", { title: "Facebook", children: (0, jsx_runtime_1.jsx)("a", { target: "_blank", className: style, href: `${clientConfig_1.default.aic.facebook}`, children: (0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-facebook" }) }) }), (0, jsx_runtime_1.jsx)("div", { title: "Instagram", children: (0, jsx_runtime_1.jsx)("a", { className: style, target: "_blank", href: `${clientConfig_1.default.aic.instagram}`, children: (0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-instagram" }) }) }), (0, jsx_runtime_1.jsx)("div", { title: "Messenger", children: (0, jsx_runtime_1.jsx)("a", { className: style, target: "_blank", href: `${clientConfig_1.default.aic.messenger}`, children: (0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-facebook-messenger" }) }) }), (0, jsx_runtime_1.jsx)("div", { title: "Phone", children: (0, jsx_runtime_1.jsx)("a", { className: style, href: `tel:${clientConfig_1.default.aic.phone}`, children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-phone" }) }) }), (0, jsx_runtime_1.jsx)("div", { title: "Facetime Audio", children: (0, jsx_runtime_1.jsx)("a", { className: style, href: `facetime-audio:${clientConfig_1.default.aic.email}`, children: (0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-apple" }) }) })] }));
};
exports.default = Social;
