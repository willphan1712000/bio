"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Template_1 = __importDefault(require("../Template"));
const Marketing = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'p-10', children: (0, jsx_runtime_1.jsx)(Template_1.default, { title: "Explore More Template", variant: "soft", color: "crimson", size: "4" }) }));
};
exports.default = Marketing;
