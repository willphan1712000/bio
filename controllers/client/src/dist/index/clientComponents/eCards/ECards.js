"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Separator_1 = __importDefault(require("../Separator"));
const Effect_1 = __importDefault(require("./Effect"));
const Slider_1 = __importDefault(require("./Slider"));
const ECards = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-[20px] pb-5', children: "Basic eBusiness Cards" }), (0, jsx_runtime_1.jsx)(Slider_1.default, {}), (0, jsx_runtime_1.jsx)(Separator_1.default, {}), (0, jsx_runtime_1.jsx)("p", { className: 'text-[25px]', children: "Professional eBusiness Cards" }), (0, jsx_runtime_1.jsx)(Effect_1.default, {})] }));
};
exports.default = ECards;
