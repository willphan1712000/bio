"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Default;
const jsx_runtime_1 = require("react/jsx-runtime");
const Save_1 = __importDefault(require("./Save"));
function Default() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "adminBtn__ele adminBtn__save bg-[#f6f2ff]", children: [(0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-check" }), " Save"] }), (0, jsx_runtime_1.jsx)(Save_1.default, {})] }));
}
