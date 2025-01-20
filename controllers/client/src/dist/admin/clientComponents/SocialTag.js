"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AdminContext_1 = require("./AdminContext");
const CountryCode_1 = __importDefault(require("./CountryCode/CountryCode"));
const ElementMap_1 = require("./ElementMap");
const Input_1 = __importDefault(require("./Input"));
const SocialTag = () => {
    const name = (0, AdminContext_1.handleAdminElementContext)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: `social ${name}`, children: [(0, jsx_runtime_1.jsx)("div", { className: "social__img info__img aspect-square flex justify-center items-center flex-col relative p-[20px]", children: ElementMap_1.iconMap[name] }), (0, jsx_runtime_1.jsx)("div", { className: 'social__tool flex items-center', children: (0, jsx_runtime_1.jsx)("div", { className: "social__tool--wrapper flex items-center relative h-auto", children: ['Mobile', 'Work', 'Viber', 'Whatsapp'].includes(name) && (0, jsx_runtime_1.jsx)(CountryCode_1.default, {}) }) }), (0, jsx_runtime_1.jsx)("div", { className: "social__info info__about flex flex-col justify-center my-0 mx-[10px] flex-grow-1 w-full", children: (0, jsx_runtime_1.jsx)(Input_1.default, { inputLabelColor: '#f6f2ff' }) })] }));
};
exports.default = SocialTag;
