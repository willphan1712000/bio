"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ColorPickerMethod_1 = require("./ColorPickerMethod");
const ColorPickerGradient = ({ keyValue, defaultColor, cb }) => {
    const [color1, setColor1] = (0, react_1.useState)(0);
    const [color2, setColor2] = (0, react_1.useState)(0);
    const [deg, setDeg] = (0, react_1.useState)(0);
    const [color, setColor] = (0, react_1.useState)(defaultColor);
    function colorOneChange(e) {
        setColor1(e.target.value);
        setColor(`linear-gradient(${deg}deg, ${(0, ColorPickerMethod_1.hslToHex)(Number(color2), 100, 80)}, ${(0, ColorPickerMethod_1.hslToHex)(Number(color1), 100, 80)})`);
    }
    function colorTwoChange(e) {
        setColor2(e.target.value);
        setColor(`linear-gradient(${deg}deg, ${(0, ColorPickerMethod_1.hslToHex)(Number(color2), 100, 80)}, ${(0, ColorPickerMethod_1.hslToHex)(Number(color1), 100, 80)})`);
    }
    function degChange(e) {
        setDeg(e.target.value);
        setColor(`linear-gradient(${deg}deg, ${(0, ColorPickerMethod_1.hslToHex)(Number(color2), 100, 80)}, ${(0, ColorPickerMethod_1.hslToHex)(Number(color1), 100, 80)})`);
    }
    (0, react_1.useEffect)(() => {
        cb(color);
    }, [color]);
    const colorInputClass = 'appearance-none h-[10px] rounded-[20px] bg-[linear-gradient(to_right,_hsl(0,_100%,_50%),_hsl(60,_100%,_50%),_hsl(120,_100%,_50%),_hsl(180,_100%,_50%),_hsl(240,_100%,_50%),_hsl(300,_100%,_50%),_hsl(360,_100%,_50%))] outline-none bg-opacity-90 border-none';
    return ((0, jsx_runtime_1.jsx)("div", { id: keyValue, className: "flex flex-row justify-center items-center h-auto bg-white rounded-[20px] p-[10px] z-[1] flex-1", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-row justify-center items-center', children: [(0, jsx_runtime_1.jsx)("label", { className: 'mr-[5px]', children: "Color1" }), (0, jsx_runtime_1.jsx)("input", { id: "color1", className: colorInputClass, type: "range", min: "0", max: "360", value: color1, onChange: colorOneChange })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-row justify-center items-center', children: [(0, jsx_runtime_1.jsx)("label", { className: 'mr-[5px]', children: "Color2" }), (0, jsx_runtime_1.jsx)("input", { id: "color2", className: colorInputClass, type: "range", min: "0", max: "360", value: color2, onChange: colorTwoChange })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-row justify-center items-center', children: [(0, jsx_runtime_1.jsx)("label", { className: 'mr-[5px]', children: "Degree" }), (0, jsx_runtime_1.jsx)("input", { id: "deg", className: "id", type: "range", min: "0", max: "360", value: deg, onChange: degChange })] })] }) }));
};
exports.default = ColorPickerGradient;
