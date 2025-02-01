"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SaveDefault;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_spinners_1 = require("react-spinners");
const AdminContext_1 = require("../AdminContext");
const Reducer_1 = __importDefault(require("./Reducer"));
const Save_1 = __importDefault(require("./Save"));
function SaveDefault() {
    const [state, dispatch] = (0, react_1.useReducer)(Reducer_1.default, {
        isSubmitting: false,
        isShow: false,
        disabled: false,
        default: 'Save',
        msg: 'Save'
    });
    return ((0, jsx_runtime_1.jsx)(AdminContext_1.AdminSaveContext.Provider, { value: [state, dispatch], children: (0, jsx_runtime_1.jsx)("div", { className: 'flex justify-center items-center sticky bottom-[1.5rem] z-[2] m-[20px]', children: (0, jsx_runtime_1.jsx)("div", { className: 'min-w-[70%]', children: (0, jsx_runtime_1.jsxs)("div", { className: `saveDefaultButtonStyle ${state.isShow ? 'saveDefaultButtonGlowingStyle' : ''}`, children: [(0, jsx_runtime_1.jsxs)("span", { className: "flex items-center text-center", children: [(0, jsx_runtime_1.jsx)("p", { className: 'mx-[10px]', children: state.msg }), " ", (0, jsx_runtime_1.jsx)(react_spinners_1.ClipLoader, { size: "20px", color: '#000', loading: state.isSubmitting })] }), (0, jsx_runtime_1.jsx)(Save_1.default, {})] }) }) }) }));
}
