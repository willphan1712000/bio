"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ti_1 = require("react-icons/ti");
const Card = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'bg-[--apple] rounded-[40px] w-[300px] h-[400px] overflow-hidden relative', children: [(0, jsx_runtime_1.jsx)("img", { src: "/controllers/client/img/background.png", className: 'size-full object-cover', draggable: "false", loading: "lazy" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-5 right-5 rounded-full bg-[--apple] size-[40px] flex justify-center items-center", children: (0, jsx_runtime_1.jsx)(ti_1.TiPlus, { size: "20" }) })] }));
};
exports.default = Card;
