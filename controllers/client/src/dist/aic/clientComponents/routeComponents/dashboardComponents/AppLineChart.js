"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const recharts_1 = require("recharts");
const theme_1 = __importDefault(require("../../../../client/clientComponents/context/theme"));
const data = [{ name: 'Facebook', uv: 400, pv: 2400, amt: 2400 }, { name: 'Instagram', uv: 200, pv: 2400, amt: 2400 }, { name: 'Tiktok', uv: 890, pv: 2400, amt: 2400 }];
const AppLineChart = () => {
    const theme = (0, theme_1.default)();
    const classes = `${theme.classes.container} ${theme.classes.border} p-10 rounded-3xl shadow-xl`;
    return ((0, jsx_runtime_1.jsx)("div", { className: classes, children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { width: 600, height: 300, children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { width: 600, height: 300, data: data, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { stroke: "#aaa", strokeDasharray: "5 5" }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { dataKey: "uv", type: "monotone", strokeWidth: 2, name: 'Number of links created' }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "name" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, {}), (0, jsx_runtime_1.jsx)(recharts_1.Legend, { align: 'left' }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {})] }) }) }));
};
exports.default = AppLineChart;
