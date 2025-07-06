"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Signin_1 = __importDefault(require("../Signin"));
const Signup_1 = __importDefault(require("../Signup"));
const Button = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Signin_1.default, { content: "Sign In" }), (0, jsx_runtime_1.jsx)(Signup_1.default, { content: "Sign up" })] }));
};
exports.default = Button;
