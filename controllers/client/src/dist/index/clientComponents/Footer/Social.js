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
const Social = () => {
    const { isPending, data: companyInfo } = (0, react_query_1.useQuery)({
        queryKey: ['companyInfo'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return yield companyInfo_1.default.get(); })
    });
    const style = 'border-white border-[2px] p-[5px] rounded-full size-[40px] flex flex-row justify-center items-center';
    const urlParts = companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.url.split(" ");
    if (isPending)
        return (0, jsx_runtime_1.jsx)(react_spinners_1.BeatLoader, {});
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'text-white flex flex-row justify-center items-center gap-5 text-[20px] py-[30px]', children: [(0, jsx_runtime_1.jsx)("div", { title: "Facebook", children: (0, jsx_runtime_1.jsx)("a", { target: "_blank", className: style, href: `${urlParts[1]}`, children: (0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-facebook" }) }) }), (0, jsx_runtime_1.jsx)("div", { title: "Instagram", children: (0, jsx_runtime_1.jsx)("a", { className: style, target: "_blank", href: `${urlParts[2]}`, children: (0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-instagram" }) }) }), (0, jsx_runtime_1.jsx)("div", { title: "Messenger", children: (0, jsx_runtime_1.jsx)("a", { className: style, target: "_blank", href: `${urlParts[3]}`, children: (0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-facebook-messenger" }) }) }), (0, jsx_runtime_1.jsx)("div", { title: "Phone", children: (0, jsx_runtime_1.jsx)("a", { className: style, href: `tel:${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.phoneNumber}`, children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-phone" }) }) }), (0, jsx_runtime_1.jsx)("div", { title: "Facetime Audio", children: (0, jsx_runtime_1.jsx)("a", { className: style, href: `facetime-audio:${companyInfo === null || companyInfo === void 0 ? void 0 : companyInfo.email}`, children: (0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-apple" }) }) })] }));
};
exports.default = Social;
