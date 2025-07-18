"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AppImage_1 = __importDefault(require("../../client/clientComponents/AppImage"));
const Logo = () => {
    return ((0, jsx_runtime_1.jsx)("a", { href: "/", children: (0, jsx_runtime_1.jsx)(AppImage_1.default, { src: "/controllers/client/img/logo.png", className: 'w-full' }) }));
};
exports.default = Logo;
