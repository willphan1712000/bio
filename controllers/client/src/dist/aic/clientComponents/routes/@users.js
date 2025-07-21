"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const react_router_1 = require("@tanstack/react-router");
exports.Route = (0, react_router_1.createFileRoute)('/@users')({
    component: RouteComponent,
});
function RouteComponent() {
}
