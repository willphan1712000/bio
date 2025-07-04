"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const W_1 = require("../client/src/Web-Development/W");
require("@willphan1712000/w/dist/index.css");
require("@radix-ui/themes/styles.css");
const App_1 = __importDefault(require("./clientComponents/App"));
const themes_1 = require("@radix-ui/themes");
$(document).ready(function () {
    const container = document.getElementById("container");
    if (!container)
        return;
    (0, W_1.$$)("#container", (0, jsx_runtime_1.jsx)(themes_1.Theme, { radius: "full", children: (0, jsx_runtime_1.jsx)(App_1.default, {}) })).reactMounting();
});
