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
const Copyright = () => {
    const { isPending, data: companyInfo } = (0, react_query_1.useQuery)({
        queryKey: ['companyInfo'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return yield companyInfo_1.default.get(); })
    });
    const copyright = `© ${new Date().getFullYear()} Allinclicks. All rights reserved.`;
    const allinclicksUrl = companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.url.split(" ")[0];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative flex flex-col justify-center items-center w-full text-white", children: [(0, jsx_runtime_1.jsx)("p", { children: copyright }), isPending ? (0, jsx_runtime_1.jsx)(react_spinners_1.BeatLoader, {}) : ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-3", children: [(0, jsx_runtime_1.jsx)("a", { href: `${allinclicksUrl}/privacy`, target: "", children: "Privacy Policy" }), (0, jsx_runtime_1.jsx)("span", { children: " | " }), (0, jsx_runtime_1.jsx)("a", { href: `${allinclicksUrl}/terms`, target: "", children: "Terms of Use" })] }))] }));
};
exports.default = Copyright;
