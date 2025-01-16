"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const RangeSlider = ({ keyValue, range, defaultValue, cb }) => {
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    function handleChange(e) {
        const r = parseInt(e.target.value);
        setValue(r);
        cb(r);
    }
    return ((0, jsx_runtime_1.jsx)("div", { id: keyValue, className: "h-auto flex flex-1 flex-row items-center justify-center bg-white rounded-[20px] p-[10px] shadow-md z-[1]", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center justify-between gap-[10px]", children: [(0, jsx_runtime_1.jsx)("p", { className: "mr-[10px]", children: value }), (0, jsx_runtime_1.jsx)("input", { id: "range", className: "h-auto rounded-[20px] outline-none opacity-90 transition-opacity duration-200 border-none", type: "range", min: range.min, max: range.max, value: value, onChange: handleChange })] }) }));
};
exports.default = RangeSlider;
