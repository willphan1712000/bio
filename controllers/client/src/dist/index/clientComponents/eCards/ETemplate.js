"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const Separator_1 = __importDefault(require("../Separator"));
const Template_1 = __importDefault(require("../Template"));
const Effect_1 = __importDefault(require("./Effect"));
const Slider_1 = __importDefault(require("./Slider"));
const basic_products = clientConfig_1.default.templates.basic.products;
const pro_products = clientConfig_1.default.templates.pro.products;
const ETemplate = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-[20px] pb-5', children: "Basic Templates" }), (0, jsx_runtime_1.jsx)("div", { id: "basic_templates" }), (0, jsx_runtime_1.jsx)(Slider_1.default, { products: basic_products }), (0, jsx_runtime_1.jsx)(Separator_1.default, { thickness: '4' }), (0, jsx_runtime_1.jsx)("p", { className: 'text-[25px] pb-5', children: "Pro Templates" }), (0, jsx_runtime_1.jsx)("div", { id: "pro_templates" }), (0, jsx_runtime_1.jsx)(Effect_1.default, { products: pro_products }), (0, jsx_runtime_1.jsx)("div", { className: 'p-10', children: (0, jsx_runtime_1.jsx)(Template_1.default, { content: "Explore More Template" }) })] }));
};
exports.default = ETemplate;
