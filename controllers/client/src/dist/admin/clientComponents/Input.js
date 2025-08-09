import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { $$$ } from '../../client/src/Web-Development/WW';
import handleAdminContext, { handleAdminElementContext, handleAdminLabelContext, handleAdminRegexContext } from './AdminContext';
const Input = ({ inputLabelColor, name }) => {
    const data = handleAdminContext();
    const regexMap = handleAdminRegexContext();
    const nameContext = handleAdminElementContext();
    const labelMap = handleAdminLabelContext();
    if (name === undefined) {
        name = nameContext;
    }
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    const spanRef = useRef(null);
    const handleChange = (e) => {
        const valueFormatted = e.target.value;
        setValue(valueFormatted);
        data[name] = valueFormatted;
    };
    useEffect(() => {
        setValue(data[name]);
        $(spanRef.current).empty();
        const validate = $$$(inputRef.current, spanRef.current, new RegExp(regexMap[name].slice(1, -1))).formValidate();
        return () => {
            validate.cleanup();
        };
    }, [name]);
    return (_jsxs("div", { className: 'relative w-full h-[32px]', children: [_jsx("input", { ref: inputRef, value: value === null ? '' : value, onChange: handleChange, required: true, type: "text", inputMode: ['Mobile', 'Work', 'Zalo', 'Viber', 'HotLine', 'Whatsapp'].includes(name) ? 'numeric' : 'text', autoComplete: 'on', name: name, id: name, className: 'peer absolute rounded-[10px] border-black border-[1px] p-[5px] text-[16px] w-full h-auto z-[1] bg-transparent' }), _jsxs("div", { style: { background: inputLabelColor }, className: `label z-[0] absolute top-0 left-0 py-0 px-[5px] m-[5px] text-[15px] text-black transition-all peer-focus:top-[-15px] peer-focus:left-[10px] peer-focus:z-[1] peer-focus:text-[13px] peer-valid:top-[-15px] peer-valid:left-[10px] peer-valid:z-[1] peer-valid:text-[13px]`, children: [labelMap[name], " ", _jsx("span", { ref: spanRef, className: 'ml-[5px]' })] })] }));
};
export default Input;
