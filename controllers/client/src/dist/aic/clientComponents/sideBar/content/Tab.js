"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const tb_1 = require("react-icons/tb");
const theme_1 = __importDefault(require("../../../../client/clientComponents/context/theme"));
const fa_1 = require("react-icons/fa");
const bi_1 = require("react-icons/bi");
const md_1 = require("react-icons/md");
const ci_1 = require("react-icons/ci");
const icons = [
    (0, jsx_runtime_1.jsx)(tb_1.TbLayoutDashboard, { size: "25" }),
    (0, jsx_runtime_1.jsx)(bi_1.BiAnalyse, {}),
    (0, jsx_runtime_1.jsx)(fa_1.FaMoneyCheckAlt, {}),
    (0, jsx_runtime_1.jsx)(md_1.MdLogout, {}),
    (0, jsx_runtime_1.jsx)(ci_1.CiLogout, {})
];
const Tab = ({ selected = false, name, icon }) => {
    const theme = (0, theme_1.default)();
    const className = `${theme.classes.hover} ${theme.classes.text} flex items-center flex-row gap-2 m-5 p-3 rounded-xl cursor-pointer transition-all ${selected ? `${theme.classes.border}` : ''}`;
    return ((0, jsx_runtime_1.jsxs)("a", { className: className, href: "/@aic?tab=", children: [icons[icon], (0, jsx_runtime_1.jsx)("p", { children: name })] }));
};
exports.default = Tab;
