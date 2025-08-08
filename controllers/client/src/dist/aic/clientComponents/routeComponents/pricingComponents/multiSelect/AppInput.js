"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const context_1 = __importDefault(require("../context"));
const AppInput = ({ title = '', name, id }) => {
    var _a;
    const { state, setState } = (_a = (0, context_1.default)()) !== null && _a !== void 0 ? _a : {};
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
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'relative md:w-auto w-full flex-1', children: [(0, jsx_runtime_1.jsx)("span", { className: 'absolute text-black top-[-15px] left-[10px] bg-white px-[5px]', children: title }), (0, jsx_runtime_1.jsx)("input", { placeholder: `${name === 'price' ? '0.00' : '0'}`, type: "text", min: "0", className: 'text-black focus:border-[1px] w-full', name: name, value: value, onChange: handleChange })] }));
};
exports.default = AppInput;
