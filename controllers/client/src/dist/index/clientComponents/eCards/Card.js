"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ti_1 = require("react-icons/ti");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const AppImage_1 = __importDefault(require("../AppImage"));
const Card = ({ product = clientConfig_1.default.default_product }) => {
    return ((0, jsx_runtime_1.jsx)("a", { href: product.url, target: "", children: (0, jsx_runtime_1.jsxs)("div", { className: 'bg-[--apple] rounded-[40px] w-[300px] h-[400px] overflow-hidden relative', children: [(0, jsx_runtime_1.jsx)(AppImage_1.default, { src: product.thumbnails, className: 'size-full object-cover' }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-5 right-5 rounded-full bg-[--apple] size-[50px] flex justify-center items-center", children: (0, jsx_runtime_1.jsx)(ti_1.TiPlus, { size: "20" }) })] }) }));
};
exports.default = Card;
