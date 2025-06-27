"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const Info = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-[2] flex-col items-start text-white text-[16px]', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-[20px]', children: "Contact Us" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Facetime: ", (0, jsx_runtime_1.jsx)("a", { href: `facetime-audio:${clientConfig_1.default.aic.email}`, children: clientConfig_1.default.aic.phone })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Email: ", (0, jsx_runtime_1.jsx)("a", { href: `mailto:${clientConfig_1.default.aic.email}`, children: clientConfig_1.default.aic.email })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Address: ", (0, jsx_runtime_1.jsx)("a", { href: `https://google.com/maps?q=${clientConfig_1.default.aic.address}`, children: clientConfig_1.default.aic.address })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Website: ", (0, jsx_runtime_1.jsx)("a", { href: `${clientConfig_1.default.aic.website}`, children: clientConfig_1.default.aic.website })] })] }));
};
exports.default = Info;
