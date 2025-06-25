"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const gsap_1 = __importDefault(require("gsap"));
const ScrollTrigger_1 = require("gsap/ScrollTrigger");
const react_1 = require("react");
gsap_1.default.registerPlugin(ScrollTrigger_1.ScrollTrigger);
const Template = () => {
    const imgRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const img = imgRef.current;
        if (!img)
            return;
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: img,
                start: "top 10%",
                end: "120% 10%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(img, { borderRadius: '999px', width: '50%' }, { borderRadius: '20px', width: '90%' });
        window.addEventListener('resize', () => {
            ScrollTrigger_1.ScrollTrigger.refresh();
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "md:h-[70vh]" }), (0, jsx_runtime_1.jsx)("div", { className: 'h-[150vh] flex flex-col items-center bg-[--primary] py-10', children: (0, jsx_runtime_1.jsx)("div", { className: 'md:h-[90vh] overflow-hidden rounded-full sticky top-[50%] translate-y-[-50%]', ref: imgRef, children: (0, jsx_runtime_1.jsx)("img", { src: "/controllers/client/img/template2.png", className: 'size-full object-cover' }) }) })] }));
};
exports.default = Template;
