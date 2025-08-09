import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CartCheckout from './CartCheckout';
import handleCartContext from './CartContext';
import CartItem from './CartItem';
const CartView = () => {
    const [state, dispatch] = handleCartContext();
    const items = state.items;
    if (state.show)
        return (_jsxs("div", { className: 'backdrop-blur-lg w-screen h-[100dvh] fixed top-0 left-0 p-4 flex flex-col justify-center items-center', children: [_jsx("div", { className: 'absolute top-[10px] right-[10px] px-3 py-2 text-xs font-medium text-center text-black bg-[#d4d4d4] rounded-lg cursor-pointer', onClick: () => {
                        dispatch({ type: 'show' });
                        $("body").css({
                            overflow: "auto"
                        });
                    }, children: "Go Back" }), Object.keys(items).length !== 0 ? (_jsxs(_Fragment, { children: [_jsx("p", { className: 'text-center w-full p-5 text-[30px]', children: "Your Cart" }), _jsx("div", { className: 'flex flex-row gap-10 overflow-auto p-5 w-[38.95vh] h-[70vh] border-[2px] border-black rounded-[10px]', children: Object.keys(items).map(item => _jsx(CartItem, { item: item }, item)) }), _jsx("div", { className: 'flex flex-row w-full justify-center items-center p-5', children: _jsx(CartCheckout, {}) })] })) : _jsx("p", { className: 'text-[20px]', children: "Your cart is empty" })] }));
};
export default CartView;
