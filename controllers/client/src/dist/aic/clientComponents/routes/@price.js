"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const react_router_1 = require("@tanstack/react-router");
const Price_1 = __importDefault(require("../routeComponents/Price"));
exports.Route = (0, react_router_1.createFileRoute)('/@price')({
    component: Price_1.default,
});
