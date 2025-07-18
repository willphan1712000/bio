"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Logo_1 = __importDefault(require("../../../client/clientComponents/Logo"));
const Link_1 = __importDefault(require("./Link"));
const Button_1 = __importDefault(require("./Button"));
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
const NavBar = () => {
    (0, react_1.useEffect)(() => {
        const navBtn = document.getElementById("navBtn");
        const navBtnClose = document.getElementById("navBtnClose");
        const nav = document.getElementById("nav");
        if (!navBtn || !nav || !navBtnClose)
            return;
        navOpenFunc(navBtn, navBtnClose, nav);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'rounded-3xl w-full', children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full hidden lg:flex flex-row justify-between p-[20px] bg-white", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-[200px]", children: (0, jsx_runtime_1.jsx)(Logo_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-row gap-5 justify-start items-center flex-1 px-10", children: (0, jsx_runtime_1.jsx)(Link_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-row gap-2 items-center", children: (0, jsx_runtime_1.jsx)(Button_1.default, {}) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col relative lg:hidden", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full flex flex-row justify-between p-[10px] bg-white", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-[200px]", children: (0, jsx_runtime_1.jsx)(Logo_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-start justify-center text-[30px] cursor-pointer transition-all", id: "navBtn", children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-bars" }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex-col items-start justify-center text-[30px] cursor-pointer transition-all hidden", id: "navBtnClose", children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-circle-xmark" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-5 rounded-[30px] absolute top-[110%] left-0 w-full z-[99] invisible", id: "nav", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-5 justify-start items-center flex-1 px-10", children: (0, jsx_runtime_1.jsx)(Link_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-row gap-2 justify-center py-5", children: (0, jsx_runtime_1.jsx)(Button_1.default, {}) })] })] })] }));
};
exports.default = NavBar;
