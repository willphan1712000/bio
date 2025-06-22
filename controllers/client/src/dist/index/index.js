"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const W_1 = require("../client/src/Web-Development/W");
const AppScrollTrigger_1 = __importDefault(require("./clientComponents/ScrollTrigger/AppScrollTrigger"));
$(document).ready(function () {
    const showcase = document.getElementById("showcase");
    if (!showcase) {
        console.log("Not Rendered");
    }
    index();
});
function index() {
    (0, W_1.$$)("#showcase", (0, jsx_runtime_1.jsx)(AppScrollTrigger_1.default, {})).reactMounting();
}
