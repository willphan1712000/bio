"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const tb_1 = require("react-icons/tb");
const theme_1 = __importDefault(require("../../../../client/clientComponents/context/theme"));
const Dashboard = ({ selected = true }) => {
    const theme = (0, theme_1.default)();
    const className = `${theme.classes.hover} ${theme.classes.text} flex flex-row gap-2 m-5 p-3 rounded-xl cursor-pointer transition-all ${selected ? `${theme.classes.border}` : ''}`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, children: [(0, jsx_runtime_1.jsx)(tb_1.TbLayoutDashboard, { size: "25" }), (0, jsx_runtime_1.jsx)("p", { children: "Dashboard" })] }));
};
exports.default = Dashboard;
