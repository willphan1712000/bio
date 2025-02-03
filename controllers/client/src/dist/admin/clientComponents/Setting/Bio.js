"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AdminContext_1 = require("../AdminContext");
const Bio = () => {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("a", { href: `/${(0, AdminContext_1.username)()}`, className: "p-[15px] bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center no-underline text-black cursor-pointer", style: {
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
            }, children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-arrow-left" }) }) }));
};
exports.default = Bio;
