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
const react_query_1 = require("@tanstack/react-query");
const companyInfo_1 = __importDefault(require("../api/companyInfo"));
const react_spinners_1 = require("react-spinners");
const Info = () => {
    const { isPending, data: companyInfo } = (0, react_query_1.useQuery)({
        queryKey: ['companyInfo'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return yield companyInfo_1.default.get(); })
    });
    const allinclicksUrl = companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.url.split(" ")[0];
    if (isPending)
        return (0, jsx_runtime_1.jsx)(react_spinners_1.BeatLoader, {});
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-[2] flex-col items-start text-white text-[16px]', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-[20px]', children: "Contact Us" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Facetime: ", (0, jsx_runtime_1.jsx)("a", { href: `facetime-audio:${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.email}`, children: companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.phoneNumber })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Email: ", (0, jsx_runtime_1.jsx)("a", { href: `mailto:${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.email}`, children: companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.email })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Address: ", (0, jsx_runtime_1.jsx)("a", { target: "_blank", href: `https://google.com/maps?q=${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.address}`, children: companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.address })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Website: ", (0, jsx_runtime_1.jsx)("a", { target: "_blank", href: `${allinclicksUrl}`, children: allinclicksUrl })] })] }));
};
exports.default = Info;
