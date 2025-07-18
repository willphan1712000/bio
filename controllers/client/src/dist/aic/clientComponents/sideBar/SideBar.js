"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Account_1 = __importDefault(require("./Account"));
const Dashboard_1 = __importDefault(require("./content/Dashboard"));
const theme_1 = __importDefault(require("../../../client/clientComponents/context/theme"));
const SideBar = () => {
    const theme = (0, theme_1.default)();
    const className = `${theme.classes.border} w-[300px] h-[100vh] shadow-2xl rounded-xl`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, children: [(0, jsx_runtime_1.jsx)(Account_1.default, {}), (0, jsx_runtime_1.jsx)(Dashboard_1.default, {})] }));
};
exports.default = SideBar;
