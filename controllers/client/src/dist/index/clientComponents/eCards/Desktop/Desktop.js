"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Effect_1 = __importDefault(require("./Effect"));
const Slider_1 = __importDefault(require("./Slider"));
const Desktop = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center p-10', children: [(0, jsx_runtime_1.jsx)(Slider_1.default, {}), (0, jsx_runtime_1.jsx)(Effect_1.default, {})] }));
};
exports.default = Desktop;
