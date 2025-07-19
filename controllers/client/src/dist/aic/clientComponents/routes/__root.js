"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_1 = require("@tanstack/react-router");
const SideBar_1 = __importDefault(require("../sideBar/SideBar"));
exports.Route = (0, react_router_1.createRootRoute)({
    component: () => (0, jsx_runtime_1.jsx)(SideBar_1.default, {})
});
