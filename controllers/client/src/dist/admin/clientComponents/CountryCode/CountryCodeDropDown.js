"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const codeList_1 = __importDefault(require("./codeList"));
const CountryCodeDropDown = ({ container }) => {
    const top = {
        top: 'calc(100% + 5px)'
    };
    const countryCodeClickHandler = (e) => {
    };
    return ((0, jsx_runtime_1.jsxs)("div", { style: top, className: "codeList !absolute hidden flex-col left-0 w-full h-[500%] bg-white rounded-[10px] z-[1] p-[5px]", children: [(0, jsx_runtime_1.jsx)("div", { className: "codeList__search", children: (0, jsx_runtime_1.jsx)("input", { name: "search", id: "searchCountry", type: "text", placeholder: "Search Country" }) }), (0, jsx_runtime_1.jsx)("div", { className: "codeList__list overflow-auto m-[5px]", children: codeList_1.default.map(country => (0, jsx_runtime_1.jsxs)("div", { onClick: countryCodeClickHandler, className: "each flex flex-row justify-between p-[5px] cursor-pointer rounded-[10px] hover:bg-[#d9d9d9]", "data-index": country.code, children: [(0, jsx_runtime_1.jsx)("p", { children: country.name }), (0, jsx_runtime_1.jsx)("p", { children: country.dial_code })] }, country.code)) })] }));
};
exports.default = CountryCodeDropDown;
