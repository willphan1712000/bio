"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CartCheckout_1 = __importDefault(require("./CartCheckout"));
const CartContext_1 = __importDefault(require("./CartContext"));
const CartItem_1 = __importDefault(require("./CartItem"));
const CartView = () => {
    const [state, dispatch] = (0, CartContext_1.default)();
    const items = state.items;
    if (state.show)
        return ((0, jsx_runtime_1.jsxs)("div", { className: 'backdrop-blur-lg w-screen h-[100dvh] fixed top-0 left-0 p-4 flex flex-col justify-center items-center', children: [(0, jsx_runtime_1.jsx)("div", { className: 'absolute top-[10px] right-[10px] px-3 py-2 text-xs font-medium text-center text-black bg-[#d4d4d4] rounded-lg cursor-pointer', onClick: () => {
                        dispatch({ type: 'show' });
                        $("body").css({
                            overflow: "auto"
                        });
                    }, children: "Go Back" }), Object.keys(items).length !== 0 ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-center w-full p-5 text-[30px]', children: "Your Cart" }), (0, jsx_runtime_1.jsx)("div", { className: 'flex flex-row gap-10 overflow-auto p-5 w-[38.95vh] h-[70vh] border-[2px] border-black rounded-[10px]', children: Object.keys(items).map(item => (0, jsx_runtime_1.jsx)(CartItem_1.default, { item: item }, item)) }), (0, jsx_runtime_1.jsx)("div", { className: 'flex flex-row w-full justify-center items-center p-5', children: (0, jsx_runtime_1.jsx)(CartCheckout_1.default, {}) })] })) : (0, jsx_runtime_1.jsx)("p", { className: 'text-[20px]', children: "Your cart is empty" })] }));
};
exports.default = CartView;
