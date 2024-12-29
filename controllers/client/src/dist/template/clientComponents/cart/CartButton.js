"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CartContext_1 = __importDefault(require("./CartContext"));
const CartButton = () => {
    const [state, dispatch] = (0, CartContext_1.default)();
    const count = Object.keys(state.items).length;
    function handleClick() {
        dispatch({ type: 'show' });
        $("body").css({
            overflow: "hidden"
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'relative', children: [(0, jsx_runtime_1.jsxs)("div", { onClick: () => handleClick(), className: 'btn-ele cart cursor-pointer', children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-cart-shopping" }), " Cart"] }), (0, jsx_runtime_1.jsx)("div", { className: 'absolute top-[-5px] left-[-5px] rounded-[50%] bg-[red] text-white w-[25px] h-[25px] flex justify-center items-center', children: count })] }));
};
exports.default = CartButton;
