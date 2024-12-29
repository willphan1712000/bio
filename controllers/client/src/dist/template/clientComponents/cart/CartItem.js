"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CartContext_1 = __importDefault(require("./CartContext"));
const CartItem = ({ item }) => {
    const [, dispatch] = (0, CartContext_1.default)();
    const src = `controllers/template/${item}/${item}.png`;
    function remove() {
        dispatch({ type: 'remove', value: parseInt(item) });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'w-full flex-shrink-0 relative', children: [(0, jsx_runtime_1.jsx)("div", { className: "rounded-[25px] border-black border-[2px] overflow-hidden", children: (0, jsx_runtime_1.jsx)("img", { src: src, className: 'w-full h-full object-contain' }) }), (0, jsx_runtime_1.jsx)("div", { onClick: () => remove(), className: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm text-center me-2 mb-2 absolute top-[-10px] left-[-10px] text-[10px] p-[8px] cursor-pointer', children: "remove" })] }));
};
exports.default = CartItem;
