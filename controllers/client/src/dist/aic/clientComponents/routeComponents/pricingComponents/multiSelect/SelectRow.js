"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const io_1 = require("react-icons/io");
const AppInput_1 = __importDefault(require("./AppInput"));
const context_1 = __importDefault(require("../context"));
const SelectRow = ({ id }) => {
    const { state, setState } = (0, context_1.default)();
    if (!state || !setState)
        return;
    const handleClick = () => {
        setState(prev => {
            if (!prev)
                return prev;
            const newPrev = prev.filter((_, i) => i !== id);
            return newPrev;
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col md:flex-row gap-6 relative w-full items-center my-[10px]', children: [(0, jsx_runtime_1.jsx)(AppInput_1.default, { title: "Price ($)", name: "price", id: id }), (0, jsx_runtime_1.jsx)(AppInput_1.default, { title: "Discount (%)", name: "discount", id: id }), (0, jsx_runtime_1.jsx)(AppInput_1.default, { title: "Period (Month)", name: "period", id: id }), (0, jsx_runtime_1.jsx)("div", { className: "cursor-pointer border-[2px] border-transparent hover:border-[red] rounded-full z-10 transition-all", title: "delete row", onClick: handleClick, children: (0, jsx_runtime_1.jsx)(io_1.IoIosCloseCircle, { color: "black", size: "30" }) })] }));
};
exports.default = SelectRow;
