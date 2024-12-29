"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TemplateContext_1 = require("../TemplateContext");
const CartCheckout = () => {
    function checkout() {
        window.location.href = '/@checkout?username=' + (0, TemplateContext_1.username)();
    }
    return ((0, jsx_runtime_1.jsx)("button", { onClick: () => checkout(), className: 'button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[200px]', children: (0, jsx_runtime_1.jsx)("p", { className: 'text-white text-[20px]', children: "Checkout" }) }));
};
exports.default = CartCheckout;
