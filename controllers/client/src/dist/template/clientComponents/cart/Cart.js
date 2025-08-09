import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer } from 'react';
import CartButton from './CartButton';
import { CartContext } from './CartContext';
import CartView from './CartView';
import reducer from './Reducer';
import AddToCard from './AddToCard';
import { username } from '../TemplateContext';
const items = JSON.parse(localStorage.getItem(username()));
const Cart = ({ signin }) => {
    const [state, dispatch] = useReducer(reducer, {
        signin: signin === 'true',
        show: false,
        items: items !== null && items !== void 0 ? items : {}
    });
    return (_jsxs(CartContext.Provider, { value: [state, dispatch], children: [_jsx(AddToCard, {}), _jsx(CartButton, {}), _jsx(CartView, {})] }));
};
export default Cart;
