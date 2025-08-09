import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import handleCartContext from './CartContext';
const CartButton = () => {
    const [state, dispatch] = handleCartContext();
    const count = Object.keys(state.items).length;
    function handleClick() {
        dispatch({ type: 'show' });
        $("body").css({
            overflow: "hidden"
        });
    }
    return (_jsxs("div", { className: 'relative', children: [_jsxs("div", { onClick: () => handleClick(), className: 'btn-ele cart cursor-pointer', children: [_jsx("i", { className: "fa-solid fa-cart-shopping" }), " Cart"] }), _jsx("div", { className: 'absolute top-[-5px] left-[-5px] rounded-[50%] bg-[red] text-white w-[25px] h-[25px] flex justify-center items-center', children: count })] }));
};
export default CartButton;
