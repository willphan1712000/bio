"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fa_1 = require("react-icons/fa");
const gr_1 = require("react-icons/gr");
const si_1 = require("react-icons/si");
const StatCard_1 = __importDefault(require("./StatCard"));
const StatCards = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-5 py-10", children: [(0, jsx_runtime_1.jsx)(StatCard_1.default, { color: 'one', icon: (0, jsx_runtime_1.jsx)(fa_1.FaRegUser, { size: "25" }), title: "Total number of users", value: "300k" }), (0, jsx_runtime_1.jsx)(StatCard_1.default, { color: "two", icon: (0, jsx_runtime_1.jsx)(si_1.SiMoneygram, { size: "25" }), title: "Pro templates" }), (0, jsx_runtime_1.jsx)(StatCard_1.default, { color: "five", icon: (0, jsx_runtime_1.jsx)(gr_1.GrMoney, { size: "25" }), title: "Total subscription" })] }));
};
exports.default = StatCards;
