"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const W_1 = require("../client/src/Web-Development/W");
const Footer_1 = __importDefault(require("./clientComponents/Footer/Footer"));
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
    const footer = document.getElementById("footer");
    if (!footer)
        return;
    (0, W_1.$$)("#footer", (0, jsx_runtime_1.jsx)(Footer_1.default, {})).reactMounting();
    const navBtn = document.getElementById("navBtn");
    const navBtnClose = document.getElementById("navBtnClose");
    const nav = document.getElementById("nav");
    if (!navBtn || !nav || !navBtnClose)
        return;
    navOpenFunc(navBtn, navBtnClose, nav);
});
function navOpenFunc(navBtn, navBtnClose, nav) {
    navBtn.addEventListener('click', () => {
        if (nav.classList.contains("invisible")) {
            open();
        }
        else {
            close();
        }
    });
    navBtnClose.addEventListener('click', () => {
        if (nav.classList.contains("invisible")) {
            close();
        }
        else {
            open();
        }
    });
    window.addEventListener('click', e => {
        const target = e.target;
        if (navBtn.contains(target) || navBtn === target)
            return;
        const isClickInside = nav.contains(target) || target === nav;
        if (!isClickInside) {
            close();
        }
    });
    function open() {
        nav.classList.remove('invisible');
        navBtnClose.classList.remove('hidden');
        navBtn.classList.add('hidden');
    }
    function close() {
        nav.classList.add('invisible');
        navBtnClose.classList.add('hidden');
        navBtn.classList.remove('hidden');
    }
}
