"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_1 = require("@tanstack/react-router");
const SideBar_1 = __importDefault(require("../sideBar/SideBar"));
const theme_1 = __importDefault(require("../../../client/clientComponents/context/theme"));
const react_hot_toast_1 = require("react-hot-toast");
exports.Route = (0, react_router_1.createRootRoute)({
    component: RootComponent
});
function RootComponent() {
    const theme = (0, theme_1.default)();
    const classes = `${theme === null || theme === void 0 ? void 0 : theme.classes.bg} flex flex-row`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: classes, children: [(0, jsx_runtime_1.jsx)(SideBar_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_1.Outlet, {}), (0, jsx_runtime_1.jsx)(react_hot_toast_1.Toaster, {})] }));
}
