"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const react_router_1 = require("@tanstack/react-router");
const react_1 = require("react");
const auth_1 = __importDefault(require("../../../client/auth/auth"));
exports.Route = (0, react_router_1.createFileRoute)('/@logout')({
    component: RouteComponent,
});
function RouteComponent() {
    (0, react_1.useEffect)(() => {
        auth_1.default.logout();
    }, []);
    return null;
}
