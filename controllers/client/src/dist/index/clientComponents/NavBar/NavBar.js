import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import Logo from '../../../client/clientComponents/Logo';
import Link from './Link';
import Button from './Button';
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
    useEffect(() => {
        const navBtn = document.getElementById("navBtn");
        const navBtnClose = document.getElementById("navBtnClose");
        const nav = document.getElementById("nav");
        if (!navBtn || !nav || !navBtnClose)
            return;
        navOpenFunc(navBtn, navBtnClose, nav);
    }, []);
    return (_jsxs("div", { className: 'w-full', children: [_jsxs("div", { className: "w-full hidden lg:flex flex-row justify-between p-[20px] bg-white rounded-[30px]", children: [_jsx("div", { className: "w-[200px]", children: _jsx(Logo, {}) }), _jsx("div", { className: "flex flex-row gap-5 justify-start items-center flex-1 px-10", children: _jsx(Link, {}) }), _jsx("div", { className: "flex flex-row gap-2 items-center", children: _jsx(Button, {}) })] }), _jsxs("div", { className: "flex flex-col relative lg:hidden", children: [_jsxs("div", { className: "w-full flex flex-row justify-between p-[10px] bg-white rounded-[30px]", children: [_jsx("div", { className: "w-[200px]", children: _jsx(Logo, {}) }), _jsx("div", { className: "flex flex-col items-start justify-center text-[30px] cursor-pointer transition-all", id: "navBtn", children: _jsx("i", { className: "fa-solid fa-bars" }) }), _jsx("div", { className: "flex-col items-start justify-center text-[30px] cursor-pointer transition-all hidden", id: "navBtnClose", children: _jsx("i", { className: "fa-solid fa-circle-xmark" }) })] }), _jsxs("div", { className: "bg-white p-5 rounded-[30px] absolute top-[110%] left-0 w-full z-[99] invisible", id: "nav", children: [_jsx("div", { className: "flex flex-col gap-5 justify-start items-center flex-1 px-10", children: _jsx(Link, {}) }), _jsx("div", { className: "flex flex-row gap-2 justify-center py-5", children: _jsx(Button, {}) })] })] })] }));
};
export default NavBar;
