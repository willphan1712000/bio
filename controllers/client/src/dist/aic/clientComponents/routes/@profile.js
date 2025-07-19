"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_1 = require("@tanstack/react-router");
exports.Route = (0, react_router_1.createFileRoute)('/@profile')({
    component: RouteComponent,
});
function RouteComponent() {
    return (0, jsx_runtime_1.jsx)("div", { children: "Hello \"/profilesds\"!" });
}
