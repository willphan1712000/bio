"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CountryCodeDropDown_1 = __importDefault(require("./CountryCodeDropDown"));
const CountryCodeIcon_1 = __importDefault(require("./CountryCodeIcon"));
const CountryCode = ({ container }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(CountryCodeIcon_1.default, {}), (0, jsx_runtime_1.jsx)(CountryCodeDropDown_1.default, { container: container })] }));
};
exports.default = CountryCode;
