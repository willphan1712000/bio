"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const recharts_1 = require("recharts");
const theme_1 = __importDefault(require("../../../../client/clientComponents/context/theme"));
const react_query_1 = require("@tanstack/react-query");
const dashboard_1 = __importDefault(require("../../api/dashboard"));
const react_spinners_1 = require("react-spinners");
const react_1 = require("react");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const AppToaster_1 = __importDefault(require("../../../../client/clientComponents/AppToaster"));
const data = [{ name: 'Facebook', uv: 400, pv: 2400, amt: 2400 }, { name: 'Instagram', uv: 200, pv: 2400, amt: 2400 }, { name: 'Tiktok', uv: 890, pv: 2400, amt: 2400 }];
const AppLineChart = () => {
    const theme = (0, theme_1.default)();
    const classes = `${theme.classes.container} ${theme.classes.border} p-10 rounded-3xl shadow-xl w-full md:w-fit overflow-auto`;
    const { isPending, data: socialInfo, error } = (0, react_query_1.useQuery)({
        queryKey: ['analyticsSocial'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return dashboard_1.default.social(); }),
        staleTime: 5 * 60 * 1000,
        retry: 1
    });
    (0, react_1.useEffect)(() => {
        if (error) {
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: (error === null || error === void 0 ? void 0 : error.message) || "Something went wrong" }));
        }
    }, [error]);
    if (isPending)
        return (0, jsx_runtime_1.jsx)(react_spinners_1.DotLoader, {});
    return ((0, jsx_runtime_1.jsx)("div", { className: classes, children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { width: 1500, height: 500, data: socialInfo, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { stroke: "#aaa", strokeDasharray: "5 5" }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { dataKey: "value", type: "monotone", strokeWidth: 2, name: 'Number of links created' }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "name" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, {}), (0, jsx_runtime_1.jsx)(recharts_1.Legend, { align: 'left' }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {})] }) }));
};
exports.default = AppLineChart;
