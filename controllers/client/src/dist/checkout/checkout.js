"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const W_1 = require("../client/src/Web-Development/W");
const App_1 = __importDefault(require("./clientComponents/App"));
$(document).ready(function () {
    (0, W_1.$$)("#checkout", (0, jsx_runtime_1.jsx)(App_1.default, {})).reactMounting();
});