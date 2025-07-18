"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Logo_1 = __importDefault(require("../../../client/clientComponents/Logo"));
const w_1 = require("@willphan1712000/w");
const Account = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'w-full', children: (0, jsx_runtime_1.jsxs)("div", { className: 'w-[60%] p-5 flex flex-col gap-5', children: [(0, jsx_runtime_1.jsx)(Logo_1.default, {}), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(w_1.Button, { content: 'Log out', onClick: () => console.log("Logout") }) })] }) }));
};
exports.default = Account;
