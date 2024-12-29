"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CartButton_1 = __importDefault(require("./CartButton"));
const CartContext_1 = require("./CartContext");
const CartView_1 = __importDefault(require("./CartView"));
const Reducer_1 = __importDefault(require("./Reducer"));
const AddToCard_1 = __importDefault(require("./AddToCard"));
const TemplateContext_1 = require("../TemplateContext");
const items = JSON.parse(localStorage.getItem((0, TemplateContext_1.username)()));
const Cart = ({ signin }) => {
    const [state, dispatch] = (0, react_1.useReducer)(Reducer_1.default, {
        signin: signin === 'true',
        show: false,
        items: items !== null && items !== void 0 ? items : {}
    });
    return ((0, jsx_runtime_1.jsxs)(CartContext_1.CartContext.Provider, { value: [state, dispatch], children: [(0, jsx_runtime_1.jsx)(AddToCard_1.default, {}), (0, jsx_runtime_1.jsx)(CartButton_1.default, {}), (0, jsx_runtime_1.jsx)(CartView_1.default, {})] }));
};
exports.default = Cart;
