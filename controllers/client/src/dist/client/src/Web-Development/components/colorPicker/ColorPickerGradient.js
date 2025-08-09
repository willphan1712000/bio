import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { hslToHex } from './ColorPickerMethod';
const ColorPickerGradient = ({ keyValue, defaultColor, cb }) => {
    const [color1, setColor1] = useState(0);
    const [color2, setColor2] = useState(0);
    const [deg, setDeg] = useState(0);
    const [color, setColor] = useState(defaultColor);
    function colorOneChange(e) {
        setColor1(e.target.value);
        setColor(`linear-gradient(${deg}deg, ${hslToHex(Number(color2), 100, 80)}, ${hslToHex(Number(color1), 100, 80)})`);
    }
    function colorTwoChange(e) {
        setColor2(e.target.value);
        setColor(`linear-gradient(${deg}deg, ${hslToHex(Number(color2), 100, 80)}, ${hslToHex(Number(color1), 100, 80)})`);
    }
    function degChange(e) {
        setDeg(e.target.value);
        setColor(`linear-gradient(${deg}deg, ${hslToHex(Number(color2), 100, 80)}, ${hslToHex(Number(color1), 100, 80)})`);
    }
    useEffect(() => {
        cb(color);
    }, [color]);
    const colorInputClass = 'appearance-none h-[10px] rounded-[20px] bg-[linear-gradient(to_right,_hsl(0,_100%,_50%),_hsl(60,_100%,_50%),_hsl(120,_100%,_50%),_hsl(180,_100%,_50%),_hsl(240,_100%,_50%),_hsl(300,_100%,_50%),_hsl(360,_100%,_50%))] outline-none bg-opacity-90 border-none';
    return (_jsx("div", { id: keyValue, className: "flex flex-row justify-center items-center h-auto bg-white rounded-[20px] p-[10px] z-[1] flex-1", children: _jsxs("div", { className: "flex flex-col items-center justify-between", children: [_jsxs("div", { className: 'flex flex-row justify-center items-center', children: [_jsx("label", { className: 'mr-[5px]', children: "Color1" }), _jsx("input", { id: "color1", className: colorInputClass, type: "range", min: "0", max: "360", value: color1, onChange: colorOneChange })] }), _jsxs("div", { className: 'flex flex-row justify-center items-center', children: [_jsx("label", { className: 'mr-[5px]', children: "Color2" }), _jsx("input", { id: "color2", className: colorInputClass, type: "range", min: "0", max: "360", value: color2, onChange: colorTwoChange })] }), _jsxs("div", { className: 'flex flex-row justify-center items-center', children: [_jsx("label", { className: 'mr-[5px]', children: "Degree" }), _jsx("input", { id: "deg", className: "id", type: "range", min: "0", max: "360", value: deg, onChange: degChange })] })] }) }));
};
export default ColorPickerGradient;
