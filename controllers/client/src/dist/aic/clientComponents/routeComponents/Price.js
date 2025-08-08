"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Layout_1 = __importDefault(require("./Layout"));
const PricingModel_1 = __importDefault(require("./pricingComponents/PricingModel"));
const Price = () => {
    return ((0, jsx_runtime_1.jsx)(Layout_1.default, { heading: 'Pricing Management', children: (0, jsx_runtime_1.jsx)(PricingModel_1.default, {}) }));
};
exports.default = Price;
