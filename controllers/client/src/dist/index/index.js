"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const W_1 = require("../client/src/Web-Development/W");
const Heading_1 = __importDefault(require("./clientComponents/Heading/Heading"));
const AppScrollTrigger_1 = __importDefault(require("./clientComponents/ScrollTrigger/AppScrollTrigger"));
const Template_1 = __importDefault(require("./clientComponents/Templates/Template"));
$(document).ready(function () {
    const heading = document.getElementById("heading");
    if (!heading)
        return;
    (0, W_1.$$)("#heading", (0, jsx_runtime_1.jsx)(Heading_1.default, {})).reactMounting();
    const showcase = document.getElementById("showcase");
    if (!showcase)
        return;
    (0, W_1.$$)("#showcase", (0, jsx_runtime_1.jsx)(AppScrollTrigger_1.default, {})).reactMounting();
    const templates = document.getElementById("templates");
    if (!templates)
        return;
    (0, W_1.$$)("#templates", (0, jsx_runtime_1.jsx)(Template_1.default, {})).reactMounting();
});
