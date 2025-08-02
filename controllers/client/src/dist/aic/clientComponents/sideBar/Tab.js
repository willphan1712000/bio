"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const collapse_1 = __importDefault(require("./context/collapse"));
const theme_1 = __importDefault(require("../../../client/clientComponents/context/theme"));
const react_router_1 = require("@tanstack/react-router");
const Tab = ({ to, name, icon, onClick }) => {
    const theme = (0, theme_1.default)();
    const { isCollapse } = (0, collapse_1.default)();
    const className = `${theme.classes.hover} ${theme.classes.text} !w-auto h-[50px] !flex items-center !flex-row gap-2 m-5 p-3 rounded-xl cursor-pointer`;
    const pClasses = `md:flex hidden`;
    if (to)
        return ((0, jsx_runtime_1.jsxs)(react_router_1.Link, { to: to, className: className, onClick: onClick, activeProps: {
                className: theme.classes.border
            }, children: [icon, !isCollapse && (0, jsx_runtime_1.jsx)("p", { className: pClasses, children: name })] }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, onClick: onClick, children: [icon, !isCollapse && (0, jsx_runtime_1.jsx)("p", { className: pClasses, children: name })] }));
};
exports.default = Tab;
