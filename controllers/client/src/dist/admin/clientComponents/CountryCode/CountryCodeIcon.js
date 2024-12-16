"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CountryCodeIcon = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "countryCode p-[2px] flex flex-row rounded-[10px] bg-white h-auto mr-[5px] cursor-pointer", "data-index": true, "data-flag": true, "data-code": true, children: [(0, jsx_runtime_1.jsx)("div", { className: "flag w-[40px] p-[5px] !flex items-center", children: (0, jsx_runtime_1.jsx)("img", { draggable: false, className: 'w-full h-full' }) }), (0, jsx_runtime_1.jsx)("p", { className: "code !flex items-center p-[2px]" }), (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-caret-down !flex items-center p-[2px]" })] }));
};
exports.default = CountryCodeIcon;
