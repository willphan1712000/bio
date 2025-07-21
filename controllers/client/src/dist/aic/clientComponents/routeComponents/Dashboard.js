"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const theme_1 = __importDefault(require("../../../client/clientComponents/context/theme"));
const AppLineChart_1 = __importDefault(require("./dashboardComponents/AppLineChart"));
const StatCards_1 = __importDefault(require("./dashboardComponents/StatCards"));
const Users_1 = __importDefault(require("./dashboardComponents/Users"));
const Dashboard = () => {
    const theme = (0, theme_1.default)();
    const headingClasses = `${theme.classes.text} text-[2rem] p-5`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "p-10", children: [(0, jsx_runtime_1.jsx)("h1", { className: headingClasses, children: "Welcome to Link bio Dashboard" }), (0, jsx_runtime_1.jsx)(StatCards_1.default, {}), (0, jsx_runtime_1.jsx)(AppLineChart_1.default, {}), (0, jsx_runtime_1.jsx)(Users_1.default, {})] }));
};
exports.default = Dashboard;
