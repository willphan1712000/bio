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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const w_1 = require("@willphan1712000/w");
const Template = (_a) => {
    var otherProps = __rest(_a, []);
    return ((0, jsx_runtime_1.jsx)(w_1.Button, Object.assign({}, otherProps, { onClick: () => window.location.href = '/@template', type: "gradient" })));
};
exports.default = Template;
