import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import handleCartContext from "./CartContext";
const CartItem = ({ item }) => {
    const [, dispatch] = handleCartContext();
    const src = `controllers/template/${item}/${item}.png`;
    function remove() {
        dispatch({ type: 'remove', value: parseInt(item) });
    }
    return (_jsxs("div", { className: 'w-full flex-shrink-0 relative', children: [_jsx("div", { className: "rounded-[25px] border-black border-[2px] overflow-hidden", children: _jsx("img", { src: src, className: 'w-full h-full object-contain' }) }), _jsx("div", { onClick: () => remove(), className: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm text-center me-2 mb-2 absolute top-[-10px] left-[-10px] text-[10px] p-[8px] cursor-pointer', children: "remove" })] }));
};
export default CartItem;
