"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Layout_1 = __importDefault(require("./Layout"));
const Upload_1 = __importDefault(require("./templateComponents/Upload"));
const TemplateRecords_1 = __importDefault(require("./templateComponents/TemplateRecords"));
const Template = () => {
    return ((0, jsx_runtime_1.jsxs)(Layout_1.default, { heading: "Template Management", children: [(0, jsx_runtime_1.jsx)(Upload_1.default, {}), (0, jsx_runtime_1.jsx)(TemplateRecords_1.default, {})] }));
};
exports.default = Template;
