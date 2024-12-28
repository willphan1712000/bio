"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Reducer_1 = __importDefault(require("./Reducer"));
const Save_1 = __importDefault(require("./Save"));
const AdminContext_1 = require("../AdminContext");
const SaveImg = () => {
    const [state, dispatch] = (0, react_1.useReducer)(Reducer_1.default, {
        isSubmitting: false,
        isShow: false,
        disabled: false,
        msg: 'Upload Avatar'
    });
    return ((0, jsx_runtime_1.jsx)(AdminContext_1.AdminSaveContext.Provider, { value: [state, dispatch], children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Save_1.default, {}) }) }));
};
exports.default = SaveImg;
