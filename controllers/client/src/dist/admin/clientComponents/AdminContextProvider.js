"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AdminContext_1 = require("./AdminContext");
const AdminContextProvider = ({ data, css, regex, label, setting, children }) => {
    return ((0, jsx_runtime_1.jsx)(AdminContext_1.AdminContext.Provider, { value: data, children: (0, jsx_runtime_1.jsx)(AdminContext_1.AdminCssContext.Provider, { value: css, children: (0, jsx_runtime_1.jsx)(AdminContext_1.AdminSettingContext.Provider, { value: setting, children: (0, jsx_runtime_1.jsx)(AdminContext_1.AdminRegexContext.Provider, { value: regex, children: (0, jsx_runtime_1.jsx)(AdminContext_1.AdminLabelContext.Provider, { value: label, children: children }) }) }) }) }));
};
exports.default = AdminContextProvider;
