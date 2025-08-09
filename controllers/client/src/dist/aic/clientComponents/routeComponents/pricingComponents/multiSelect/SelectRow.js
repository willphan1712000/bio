var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch } from "@radix-ui/themes";
import { IoIosCloseCircle } from "react-icons/io";
import usePricingContext from "../context";
import AppInput from "./AppInput";
const SelectRow = ({ id }) => {
    const { state, setState } = usePricingContext();
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
    return (_jsxs("div", { className: 'flex flex-col md:flex-row gap-6 relative w-full items-center my-[10px]', children: [_jsx("div", { className: "relative w-fit text-black", children: _jsx("p", { children: id + 1 }) }), _jsx(AppInput, { title: "Price ($)", name: "price", id: id }), _jsx(AppInput, { title: "Discount (%)", name: "discount", id: id }), _jsx(AppInput, { title: "Period (Month)", name: "period", id: id }), _jsxs("div", { className: "relative flex-1 w-full", children: [_jsx("span", { className: "absolute top-[-22px] left-0", children: "Is Recurring?" }), _jsx(Switch, { size: "3", defaultChecked: isChecked, onClick: () => handleSwitch() })] }), _jsx("div", { className: "cursor-pointer border-[2px] border-transparent hover:border-[red] rounded-full z-10 transition-all", title: "delete row", onClick: handleRemove, children: _jsx(IoIosCloseCircle, { color: "black", size: "30" }) })] }));
};
export default SelectRow;
