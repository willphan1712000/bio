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
const TemplateButton = (_a) => {
    var { content = "Templates" } = _a, otherProps = __rest(_a, ["content"]);
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({}, otherProps, { className: "TemplateButtonbtn", children: (0, jsx_runtime_1.jsx)("div", { style: { backgroundColor: "#111723" }, className: "TemplateButtonlabel", children: (0, jsx_runtime_1.jsx)("p", { className: "TemplateButtonp", style: { color: `$fff` }, children: content }) }) })));
};
exports.default = TemplateButton;
