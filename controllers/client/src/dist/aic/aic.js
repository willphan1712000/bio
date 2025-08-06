"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const W_1 = require("../client/src/Web-Development/W");
const App_1 = __importDefault(require("./clientComponents/App"));
require("@radix-ui/themes/styles.css");
const storage_1 = __importDefault(require("../client/auth/storage"));
$(document).ready(function () {
    const user = storage_1.default.getUser();
    if (!user || user.username !== 'Allinclicks') {
        return window.location.href = '/@signin';
    }
    (0, W_1.$$)("#admin_container", (0, jsx_runtime_1.jsx)(App_1.default, {})).reactMounting();
});
