"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const react_router_1 = require("@tanstack/react-router");
const react_1 = require("react");
const js_cookie_1 = __importDefault(require("js-cookie"));
exports.Route = (0, react_router_1.createFileRoute)('/@logout')({
    component: RouteComponent,
});
function RouteComponent() {
    (0, react_1.useEffect)(() => {
        js_cookie_1.default.remove('PHPSESSID');
        window.location.href = '/@signin';
    }, []);
    return null;
}
