"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const clientConfig_1 = __importDefault(require("../../../client/clientConfig"));
const TextOne = react_1.default.forwardRef((props, ref) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'w-[150px] relative', ref: ref, children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-[20px] text-black', children: clientConfig_1.default.nfc.one }), (0, jsx_runtime_1.jsxs)("div", { className: 'absolute top-[50%] left-[100%]', children: [(0, jsx_runtime_1.jsx)("div", { className: "w-[150px] h-[1px] bg-black" }), (0, jsx_runtime_1.jsx)("div", { className: 'rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] right-[-8px]' })] })] }));
});
exports.default = TextOne;
