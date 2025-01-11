"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AdminContext_1 = __importStar(require("../../admin/clientComponents/AdminContext"));
const CountryCode_1 = __importDefault(require("../../admin/clientComponents/CountryCode/CountryCode"));
const ElementMap_1 = require("../../admin/clientComponents/ElementMap");
const Input_1 = __importDefault(require("../../admin/clientComponents/Input"));
const SocialTag = () => {
    const name = (0, AdminContext_1.handleAdminElementContext)();
    const data = (0, AdminContext_1.default)();
    if (data === undefined) {
        throw new Error("Fetching data failed");
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: `social ${name}`, children: [(0, jsx_runtime_1.jsx)("div", { className: "social__img info__img", children: ElementMap_1.iconMap[name] }), (0, jsx_runtime_1.jsx)("div", { className: 'social__tool flex items-center', children: (0, jsx_runtime_1.jsx)("div", { className: "social__tool--wrapper flex items-center relative h-auto", children: ['Mobile', 'Work', 'Viber', 'Whatsapp'].includes(name) && (0, jsx_runtime_1.jsx)(CountryCode_1.default, {}) }) }), (0, jsx_runtime_1.jsx)("div", { className: "social__info info__about", children: (0, jsx_runtime_1.jsx)(Input_1.default, { inputLabelColor: '#f6f2ff' }) })] }));
};
exports.default = SocialTag;
