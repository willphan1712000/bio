"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const collapse_1 = __importDefault(require("./context/collapse"));
const Logo_1 = __importDefault(require("../../../client/clientComponents/Logo"));
const Account = () => {
    const { isCollapse } = (0, collapse_1.default)();
    const logoClasses = `md:flex hidden w-[60%] p-5 flex-col gap-5`;
    return ((0, jsx_runtime_1.jsx)("div", { className: 'w-full h-[80px]', children: (0, jsx_runtime_1.jsx)("div", { className: logoClasses, children: !isCollapse && (0, jsx_runtime_1.jsx)(Logo_1.default, {}) }) }));
};
exports.default = Account;
