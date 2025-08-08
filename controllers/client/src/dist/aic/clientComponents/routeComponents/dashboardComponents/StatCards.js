"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fa_1 = require("react-icons/fa");
const gr_1 = require("react-icons/gr");
const si_1 = require("react-icons/si");
const react_spinners_1 = require("react-spinners");
const dashboard_1 = __importDefault(require("../../api/dashboard"));
const StatCard_1 = __importDefault(require("./StatCard"));
const useAppEffect_1 = __importDefault(require("../../../../client/hooks/useAppEffect"));
const useAppQuery_1 = __importDefault(require("../../../../client/hooks/useAppQuery"));
const StatCards = () => {
    const { isPending, data: analyticsInfo, error } = (0, useAppQuery_1.default)('analytics', dashboard_1.default.analytics);
    (0, useAppEffect_1.default)(error);
    if (isPending)
        return (0, jsx_runtime_1.jsx)(react_spinners_1.DotLoader, {});
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center md:flex-row gap-5 py-10", children: [(0, jsx_runtime_1.jsx)(StatCard_1.default, { color: 'one', icon: (0, jsx_runtime_1.jsx)(fa_1.FaRegUser, { size: "30" }), title: "Total number of users", value: analyticsInfo === null || analyticsInfo === void 0 ? void 0 : analyticsInfo.numberOfUsers }), (0, jsx_runtime_1.jsx)(StatCard_1.default, { color: "two", icon: (0, jsx_runtime_1.jsx)(si_1.SiMoneygram, { size: "30" }), title: "Pro templates", value: analyticsInfo === null || analyticsInfo === void 0 ? void 0 : analyticsInfo.numberOfTemplates }), (0, jsx_runtime_1.jsx)(StatCard_1.default, { color: "five", icon: (0, jsx_runtime_1.jsx)(gr_1.GrMoney, { size: "30" }), title: "Total subscription", value: analyticsInfo === null || analyticsInfo === void 0 ? void 0 : analyticsInfo.numberOfSubscriptions })] }));
};
exports.default = StatCards;
