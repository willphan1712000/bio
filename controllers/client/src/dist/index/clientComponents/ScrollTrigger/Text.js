"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Text = react_1.default.forwardRef((props, ref) => {
    const { text, pointerDirection = 'up' } = props, rest = __rest(props, ["text", "pointerDirection"]);
    if (pointerDirection === 'right')
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-[20px] text-black', children: text }), (0, jsx_runtime_1.jsxs)("div", { className: `absolute top-[100px] left-[150px]`, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-[150px] h-[1px] bg-black" }), (0, jsx_runtime_1.jsx)("div", { className: `rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] right-[-8px]` })] })] })));
    if (pointerDirection === 'left')
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-[20px] text-black', children: text }), (0, jsx_runtime_1.jsxs)("div", { className: `absolute top-[100px] right-[200px]`, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-[150px] h-[1px] bg-black" }), (0, jsx_runtime_1.jsx)("div", { className: `rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] left-[-8px]` })] })] })));
    if (pointerDirection === 'up')
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-[20px] text-black', children: text }), (0, jsx_runtime_1.jsxs)("div", { className: `absolute bottom-[250px] -rotate-90`, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-[150px] h-[1px] bg-black" }), (0, jsx_runtime_1.jsx)("div", { className: `rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] right-[-8px]` })] })] })));
    if (pointerDirection === 'down')
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-[20px] text-black', children: text }), (0, jsx_runtime_1.jsxs)("div", { className: `absolute top-[100px] right-[200px]`, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-[150px] h-[1px] bg-black" }), (0, jsx_runtime_1.jsx)("div", { className: `rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] left-[-8px]` })] })] })));
});
exports.default = Text;
