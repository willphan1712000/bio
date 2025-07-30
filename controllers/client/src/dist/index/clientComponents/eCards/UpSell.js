"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const pro_products = clientConfig_1.default.cards.professional;
const UpSell = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden', children: (0, jsx_runtime_1.jsx)("p", { className: 'text-[20px] pb-5', children: "Most Popular" }) }));
};
exports.default = UpSell;
