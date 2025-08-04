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
const fa_1 = require("react-icons/fa");
const gr_1 = require("react-icons/gr");
const si_1 = require("react-icons/si");
const StatCard_1 = __importDefault(require("./StatCard"));
const react_query_1 = require("@tanstack/react-query");
const dashboard_1 = __importDefault(require("../../api/dashboard"));
const react_spinners_1 = require("react-spinners");
const AppToaster_1 = __importDefault(require("../../../../client/clientComponents/AppToaster"));
const react_1 = require("react");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const StatCards = () => {
    const { isPending, data: analyticsInfo, error } = (0, react_query_1.useQuery)({
        queryKey: ['analytics'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return dashboard_1.default.analytics(); }),
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
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center md:flex-row gap-5 py-10", children: [(0, jsx_runtime_1.jsx)(StatCard_1.default, { color: 'one', icon: (0, jsx_runtime_1.jsx)(fa_1.FaRegUser, { size: "30" }), title: "Total number of users", value: analyticsInfo === null || analyticsInfo === void 0 ? void 0 : analyticsInfo.numberOfUsers }), (0, jsx_runtime_1.jsx)(StatCard_1.default, { color: "two", icon: (0, jsx_runtime_1.jsx)(si_1.SiMoneygram, { size: "30" }), title: "Pro templates", value: analyticsInfo === null || analyticsInfo === void 0 ? void 0 : analyticsInfo.numberOfTemplates }), (0, jsx_runtime_1.jsx)(StatCard_1.default, { color: "five", icon: (0, jsx_runtime_1.jsx)(gr_1.GrMoney, { size: "30" }), title: "Total subscription", value: analyticsInfo === null || analyticsInfo === void 0 ? void 0 : analyticsInfo.numberOfSubscriptions })] }));
};
exports.default = StatCards;
