"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const Card_1 = __importDefault(require("./Card"));
const gsap_1 = __importDefault(require("gsap"));
const ScrollTrigger_1 = require("gsap/ScrollTrigger");
const Image_1 = __importDefault(require("./Image"));
gsap_1.default.registerPlugin(ScrollTrigger_1.ScrollTrigger);
const Template = () => {
    const cardOne = (0, react_1.useRef)(null);
    const cardTwo = (0, react_1.useRef)(null);
    const imgOne = (0, react_1.useRef)(null);
    const imgTwo = (0, react_1.useRef)(null);
    const [windowWidth, setWindowWidth] = (0, react_1.useState)(window.innerWidth);
    (0, react_1.useEffect)(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        });
        if (!cardOne.current || !cardTwo.current || !imgOne.current || !imgTwo.current)
            return;
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: cardOne.current,
                start: "top center",
                end: "bottom 30%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(imgOne.current, { opacity: 0 }, { opacity: 1 }).to(imgOne.current, { opacity: 0 });
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: cardTwo.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                markers: false,
            }
        }).fromTo(imgTwo.current, { opacity: 0 }, { opacity: 1 }).to(imgOne.current, { opacity: 0 });
    }, [windowWidth]);
    if (windowWidth >= 640)
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#f5f5f7] rounded-3xl flex-row", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col p-10 w-[60%]", children: [(0, jsx_runtime_1.jsx)(Card_1.default, { item: clientConfig_1.default.templates.basic, ref: cardOne }), (0, jsx_runtime_1.jsx)(Card_1.default, { item: clientConfig_1.default.templates.pro, ref: cardTwo })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex w-[40%] sticky top-0 h-[100lvh]", children: [(0, jsx_runtime_1.jsx)(Image_1.default, { url: "/controllers/client/img/background.png", ref: imgOne }), (0, jsx_runtime_1.jsx)(Image_1.default, { url: "/controllers/client/img/ip.png", ref: imgTwo })] })] }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#f5f5f7] rounded-3xl flex-col", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full sticky top-0 h-[70lvh] template-image-background", children: [(0, jsx_runtime_1.jsx)(Image_1.default, { url: "/controllers/client/img/background.png", ref: imgOne }), (0, jsx_runtime_1.jsx)(Image_1.default, { url: "/controllers/client/img/ip.png", ref: imgTwo })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col p-10 w-full", children: [(0, jsx_runtime_1.jsx)(Card_1.default, { item: clientConfig_1.default.templates.basic, ref: cardOne, isMobile: true }), (0, jsx_runtime_1.jsx)(Card_1.default, { item: clientConfig_1.default.templates.pro, ref: cardTwo, isMobile: true })] })] }));
};
exports.default = Template;
