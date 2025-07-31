"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const radix_ui_1 = require("radix-ui");
const AppToaster = ({ title, description, state }) => {
    const { open, setOpen } = state;
    return ((0, jsx_runtime_1.jsxs)(radix_ui_1.Toast.Provider, { swipeDirection: "right", children: [(0, jsx_runtime_1.jsxs)(radix_ui_1.Toast.Root, { open: true, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(radix_ui_1.Toast.Title, { children: title }), (0, jsx_runtime_1.jsx)(radix_ui_1.Toast.Description, { children: description }), (0, jsx_runtime_1.jsx)(radix_ui_1.Toast.Action, { altText: "Go" }), (0, jsx_runtime_1.jsx)(radix_ui_1.Toast.Close, {})] }), (0, jsx_runtime_1.jsx)(radix_ui_1.Toast.Viewport, {})] }));
};
exports.default = AppToaster;
