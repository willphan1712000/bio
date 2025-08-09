"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_spinners_1 = require("react-spinners");
const recharts_1 = require("recharts");
const theme_1 = __importDefault(require("../../../../client/clientComponents/context/theme"));
const dashboard_1 = __importDefault(require("../../api/dashboard"));
const useAppEffect_1 = __importDefault(require("../../../../client/hooks/useAppEffect"));
const useAppQuery_1 = __importDefault(require("../../../../client/hooks/useAppQuery"));
const data = [{ name: 'Facebook', uv: 400, pv: 2400, amt: 2400 }, { name: 'Instagram', uv: 200, pv: 2400, amt: 2400 }, { name: 'Tiktok', uv: 890, pv: 2400, amt: 2400 }];
const AppLineChart = () => {
    const theme = (0, theme_1.default)();
    const classes = `${theme.classes.container} ${theme.classes.border} p-10 rounded-3xl shadow-xl w-full md:w-fit overflow-auto`;
    const { isPending, data: socialInfo, error } = (0, useAppQuery_1.default)('analyticsSocial', dashboard_1.default.social);
    (0, useAppEffect_1.default)(error);
    if (isPending)
        return (0, jsx_runtime_1.jsx)(react_spinners_1.DotLoader, {});
    return ((0, jsx_runtime_1.jsx)("div", { className: classes, children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { width: 1500, height: 500, data: socialInfo, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { stroke: "#aaa", strokeDasharray: "5 5" }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { dataKey: "value", type: "monotone", strokeWidth: 2, name: 'Number of links created' }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "name" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, {}), (0, jsx_runtime_1.jsx)(recharts_1.Legend, { align: 'left' }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {})] }) }));
};
exports.default = AppLineChart;
