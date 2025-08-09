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
import React from "react";
const Card = React.forwardRef((props, ref) => {
    const { id = "/", item, isMobile = false } = props, rest = __rest(props, ["id", "item", "isMobile"]);
    if (!isMobile)
        return (_jsxs("div", Object.assign({ className: 'h-[100vh] w-full flex justify-center items-center flex-col text-center p-[20px]' }, rest, { ref: ref, children: [_jsx("a", { href: id, children: _jsx("h1", { className: "text-[30px] font-bold py-2 px-3 text-white bg-[--primary] rounded-full", children: item.heading }) }), _jsx("p", { className: "text-[25px]", children: item.des })] })));
    return (_jsxs("div", Object.assign({ className: 'h-[700px] w-full flex justify-end items-center flex-col text-center p-[20px]' }, rest, { ref: ref, children: [_jsx("a", { href: id, children: _jsx("h1", { className: "text-[25px] font-bold py-2 px-3 text-white bg-[--primary] rounded-full", children: item.heading }) }), _jsx("p", { className: "text-[20px]", children: item.des })] })));
});
export default Card;
