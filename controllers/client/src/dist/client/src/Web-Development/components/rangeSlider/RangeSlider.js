import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const RangeSlider = ({ keyValue, range, defaultValue, cb }) => {
    const [value, setValue] = useState(defaultValue);
    function handleChange(e) {
        const r = parseInt(e.target.value);
        setValue(r);
        cb(r);
    }
    return (_jsx("div", { id: keyValue, className: "h-auto flex flex-1 flex-row items-center justify-center bg-white rounded-[20px] p-[10px] shadow-md z-[1]", children: _jsxs("div", { className: "flex flex-row items-center justify-between gap-[10px]", children: [_jsx("p", { className: "mr-[10px]", children: value }), _jsx("input", { id: "range", className: "h-auto rounded-[20px] outline-none opacity-90 transition-opacity duration-200 border-none", type: "range", min: range.min, max: range.max, value: value, onChange: handleChange })] }) }));
};
export default RangeSlider;
