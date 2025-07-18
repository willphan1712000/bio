"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const collapse_1 = __importDefault(require("../../../client/clientComponents/context/collapse"));
const theme_1 = __importDefault(require("../../../client/clientComponents/context/theme"));
const ci_1 = require("react-icons/ci");
const Collapse = () => {
    const theme = (0, theme_1.default)();
    const { isCollapse, setCollapse } = (0, collapse_1.default)();
    const handleCollapse = () => {
        setCollapse((prev) => !prev);
    };
    const className = `${theme.classes.hover} ${theme.classes.text} flex items-center flex-row gap-2 m-5 p-3 rounded-xl cursor-pointer transition-all`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, onClick: handleCollapse, children: [(0, jsx_runtime_1.jsx)(ci_1.CiLogout, { size: "20" }), !isCollapse && (0, jsx_runtime_1.jsx)("p", { children: "Collapse Menu" })] }));
};
exports.default = Collapse;
