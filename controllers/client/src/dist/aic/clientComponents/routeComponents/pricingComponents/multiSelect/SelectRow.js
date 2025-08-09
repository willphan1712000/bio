"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const themes_1 = require("@radix-ui/themes");
const io_1 = require("react-icons/io");
const context_1 = __importDefault(require("../context"));
const AppInput_1 = __importDefault(require("./AppInput"));
const SelectRow = ({ id }) => {
    const { state, setState } = (0, context_1.default)();
    if (!state || !setState)
        return;
    const isChecked = state[id].isRecurring;
    const handleRemove = () => {
        setState(prev => {
            if (!prev)
                return prev;
            const newPrev = prev.filter((_, i) => i !== id);
            return newPrev;
        });
    };
    const handleSwitch = () => __awaiter(void 0, void 0, void 0, function* () {
        setState(prev => {
            if (!prev)
                return prev;
            const isRecurring = prev[id].isRecurring;
            const newPrev = [...prev];
            newPrev[id] = Object.assign(Object.assign({}, newPrev[id]), { isRecurring: !isRecurring });
            return newPrev;
        });
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col md:flex-row gap-6 relative w-full items-center my-[10px]', children: [(0, jsx_runtime_1.jsx)("div", { className: "relative w-fit text-black", children: (0, jsx_runtime_1.jsx)("p", { children: id + 1 }) }), (0, jsx_runtime_1.jsx)(AppInput_1.default, { title: "Price ($)", name: "price", id: id }), (0, jsx_runtime_1.jsx)(AppInput_1.default, { title: "Discount (%)", name: "discount", id: id }), (0, jsx_runtime_1.jsx)(AppInput_1.default, { title: "Period (Month)", name: "period", id: id }), (0, jsx_runtime_1.jsxs)("div", { className: "relative flex-1 w-full", children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute top-[-22px] left-0", children: "Is Recurring?" }), (0, jsx_runtime_1.jsx)(themes_1.Switch, { size: "3", defaultChecked: isChecked, onClick: () => handleSwitch() })] }), (0, jsx_runtime_1.jsx)("div", { className: "cursor-pointer border-[2px] border-transparent hover:border-[red] rounded-full z-10 transition-all", title: "delete row", onClick: handleRemove, children: (0, jsx_runtime_1.jsx)(io_1.IoIosCloseCircle, { color: "black", size: "30" }) })] }));
};
exports.default = SelectRow;
