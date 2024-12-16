"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Input = ({ inputMode, inputName, inputLabel, data }) => {
    const [value, setValue] = (0, react_1.useState)(data);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'relative w-full h-[32px]', children: [(0, jsx_runtime_1.jsx)("input", { defaultValue: value, onChange: handleChange, required: true, type: "text", inputMode: inputMode, autoComplete: 'on', name: inputName, id: inputName, className: 'peer absolute rounded-[10px] border-black border-[1px] p-[5px] text-[15px] w-full h-auto z-50 bg-transparent' }), (0, jsx_runtime_1.jsx)("div", { className: `label absolute top-0 left-0 py-0 px-[5px] m-[5px] text-[14px] text-black transition-all peer-focus:top-[-25px] peer-focus:left-[10px] peer-focus:z-50 peer-valid:top-[-25px] peer-valid:left-[10px] peer-valid:z-50`, children: inputLabel })] }));
};
exports.default = Input;
