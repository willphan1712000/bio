"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fi_1 = require("react-icons/fi");
const StatCard = ({ color = "one", icon, title = 'Card Title', value = '200k' }) => {
    const statCardClasses = `stat-card-${color} w-[300px] h-[200px] rounded-2xl p-10 flex flex-col gap-5 z-[1] relative transition-all`;
    const textClasses = `text-[18px] text-black`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: statCardClasses, children: [!icon ? (0, jsx_runtime_1.jsx)(fi_1.FiCreditCard, { size: "25" }) : icon, (0, jsx_runtime_1.jsx)("p", { className: textClasses, children: title }), (0, jsx_runtime_1.jsx)("p", { className: textClasses, children: value })] }));
};
exports.default = StatCard;
