import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import usePricingContext from "../context";
const AppInput = ({ title = '', name, id }) => {
    var _a;
    const { state, setState } = (_a = usePricingContext()) !== null && _a !== void 0 ? _a : {};
    if (!state || !setState)
        return;
    const value = state[id][name];
    if (typeof value === 'boolean')
        return;
    const handleChange = (e) => {
        const value = e.target.value;
        setState(prev => {
            if (!prev)
                return prev;
            const newPrev = [...prev];
            newPrev[id] = Object.assign(Object.assign({}, newPrev[id]), { [name]: value });
            return newPrev;
        });
    };
    return (_jsxs("div", { className: 'relative md:w-auto w-full flex-1', children: [_jsx("span", { className: 'absolute text-black top-[-15px] left-[10px] bg-white px-[5px]', children: title }), _jsx("input", { placeholder: `${name === 'price' ? '0.00' : '0'}`, type: "text", min: "0", className: 'text-black focus:border-[1px] w-full', name: name, value: value, onChange: handleChange })] }));
};
export default AppInput;
