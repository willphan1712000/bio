"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fa_1 = require("react-icons/fa");
const SelectRow_1 = __importDefault(require("./SelectRow"));
const context_1 = __importDefault(require("../context"));
const MultiSelect = () => {
    const { state, setState } = (0, context_1.default)();
    if (!state || !setState)
        return;
    const handleClick = () => {
        setState(prev => {
            if (!prev)
                return prev;
            const newPrev = [...prev];
            newPrev.push({
                price: 10,
                discount: 50,
                period: 12
            });
            return newPrev;
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'bg-white p-5 rounded-[30px] md:w-[600px] md:min-w-[600px] w-full', children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-col", children: state.map((_, id) => ((0, jsx_runtime_1.jsx)(SelectRow_1.default, { id: id }, id))) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full rounded-[15px] h-[35px] border-black border-dashed border-[2px] flex flex-row justify-center items-center cursor-pointer", title: "add a pricing model", onClick: handleClick, children: (0, jsx_runtime_1.jsx)(fa_1.FaPlus, { color: "black", size: "20" }) })] }));
};
exports.default = MultiSelect;
