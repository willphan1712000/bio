"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const SaveTemplate_1 = __importDefault(require("../Save/SaveTemplate"));
const Save = () => {
    return react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)(SaveTemplate_1.default, {}), document.getElementById("save"));
};
exports.default = Save;
