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
const Link = () => {
    const { isPending, data: companyInfo } = (0, react_query_1.useQuery)({
        queryKey: ['companyInfo'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return yield companyInfo_1.default.get(); })
    });
    if (isPending)
        return (0, jsx_runtime_1.jsx)(react_spinners_1.BeatLoader, {});
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("a", { href: "/@template", className: "hover:bg-[#f5f5f7] p-[10px] rounded-[10px]", children: "Templates" }), (0, jsx_runtime_1.jsx)("a", { href: `${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.url.split(" ")[0]}/about-us`, className: "hover:bg-[#f5f5f7] p-[10px] rounded-[10px]", children: "About us" }), (0, jsx_runtime_1.jsx)("a", { href: `${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.url.split(" ")[0]}/terms`, className: "hover:bg-[#f5f5f7] p-[10px] rounded-[10px]", children: "Terms & Privacy" }), (0, jsx_runtime_1.jsx)("a", { href: `${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.url.split(" ")[0]}/blog`, className: "hover:bg-[#f5f5f7] p-[10px] rounded-[10px]", children: "Blogs" })] }));
};
exports.default = Link;
