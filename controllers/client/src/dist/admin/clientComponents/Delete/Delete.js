"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AdminContext_1 = require("../AdminContext");
const DeleteButton_1 = __importDefault(require("./DeleteButton"));
const DeleteConfirm_1 = __importDefault(require("./DeleteConfirm"));
const Reducer_1 = __importDefault(require("./Reducer"));
const Delete = ({ message }) => {
    const [state, dispatch] = (0, react_1.useReducer)(Reducer_1.default, {
        show: false,
        username: (0, AdminContext_1.username)(),
        message,
        isDeleting: false,
        msg: 'Deactivate Account',
        disabled: false
    });
    return ((0, jsx_runtime_1.jsxs)(AdminContext_1.AdminDeleteContext.Provider, { value: [state, dispatch], children: [(0, jsx_runtime_1.jsx)(DeleteButton_1.default, {}), (0, jsx_runtime_1.jsx)(DeleteConfirm_1.default, {})] }));
};
exports.default = Delete;
