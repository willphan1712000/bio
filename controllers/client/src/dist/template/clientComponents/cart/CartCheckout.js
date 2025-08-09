import { jsx as _jsx } from "react/jsx-runtime";
import { username } from "../TemplateContext";
const CartCheckout = () => {
    function checkout() {
        window.location.href = '/@checkout?username=' + username();
    }
    return (_jsx("button", { onClick: () => checkout(), className: 'button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[200px]', children: _jsx("p", { className: 'text-white text-[20px]', children: "Checkout" }) }));
};
export default CartCheckout;
