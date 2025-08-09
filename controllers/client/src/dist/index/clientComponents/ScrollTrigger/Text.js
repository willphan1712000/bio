var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const Text = React.forwardRef((props, ref) => {
    const { text, pointerDirection = 'up' } = props, rest = __rest(props, ["text", "pointerDirection"]);
    if (pointerDirection === 'right')
        return (_jsxs("div", Object.assign({ ref: ref }, rest, { children: [_jsx("p", { className: 'text-[20px] text-black', children: text }), _jsxs("div", { className: `absolute top-[100px] left-[150px]`, children: [_jsx("div", { className: "w-[150px] h-[1px] bg-black" }), _jsx("div", { className: `rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] right-[-8px]` })] })] })));
    if (pointerDirection === 'left')
        return (_jsxs("div", Object.assign({ ref: ref }, rest, { children: [_jsx("p", { className: 'text-[20px] text-black', children: text }), _jsxs("div", { className: `absolute top-[100px] right-[200px]`, children: [_jsx("div", { className: "w-[150px] h-[1px] bg-black" }), _jsx("div", { className: `rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] left-[-8px]` })] })] })));
    if (pointerDirection === 'up')
        return (_jsxs("div", Object.assign({ ref: ref }, rest, { children: [_jsx("p", { className: 'text-[20px] text-black', children: text }), _jsxs("div", { className: `absolute bottom-[250px] -rotate-90`, children: [_jsx("div", { className: "w-[150px] h-[1px] bg-black" }), _jsx("div", { className: `rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] right-[-8px]` })] })] })));
    if (pointerDirection === 'down')
        return (_jsxs("div", Object.assign({ ref: ref }, rest, { children: [_jsx("p", { className: 'text-[20px] text-black', children: text }), _jsxs("div", { className: `absolute top-[100px] right-[200px]`, children: [_jsx("div", { className: "w-[150px] h-[1px] bg-black" }), _jsx("div", { className: `rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] left-[-8px]` })] })] })));
});
export default Text;
