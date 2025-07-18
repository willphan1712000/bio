"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const collapse_1 = __importDefault(require("../../../client/clientComponents/context/collapse"));
const theme_1 = __importDefault(require("../../../client/clientComponents/context/theme"));
const Tab = ({ selected = false, name, icon }) => {
    const theme = (0, theme_1.default)();
    const { isCollapse } = (0, collapse_1.default)();
    const className = `${theme.classes.hover} ${theme.classes.text} flex items-center flex-row gap-2 m-5 p-3 rounded-xl cursor-pointer transition-all ${selected ? `${theme.classes.border}` : ''}`;
    return ((0, jsx_runtime_1.jsxs)("a", { className: className, children: [icon, !isCollapse && (0, jsx_runtime_1.jsx)("p", { children: name })] }));
};
exports.default = Tab;
