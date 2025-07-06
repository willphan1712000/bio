"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Copyright = () => {
    const copyright = `© ${new Date().getFullYear()} Allinclicks. All rights reserved.`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative flex flex-col justify-center items-center w-full text-white", children: [(0, jsx_runtime_1.jsx)("p", { children: copyright }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-3", children: [(0, jsx_runtime_1.jsx)("a", { href: "@terms", target: "", children: "Privacy Policy" }), (0, jsx_runtime_1.jsx)("span", { children: " | " }), (0, jsx_runtime_1.jsx)("a", { href: "@terms", target: "", children: "Terms of Use" })] })] }));
};
exports.default = Copyright;
