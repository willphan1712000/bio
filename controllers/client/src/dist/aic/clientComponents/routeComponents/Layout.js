"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const theme_1 = __importDefault(require("../../../client/clientComponents/context/theme"));
const Layout = ({ children, heading }) => {
    const theme = (0, theme_1.default)();
    const headingClasses = `${theme.classes.text} pt-[100px] p-5 w-full md:w-fit md:p-10`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: headingClasses, children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[2rem] p-5", children: heading }), children] }));
};
exports.default = Layout;
