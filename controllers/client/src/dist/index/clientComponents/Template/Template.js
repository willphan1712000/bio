"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const useWindowWidth_1 = __importStar(require("../../hooks/useWindowWidth"));
gsap_1.default.registerPlugin(ScrollTrigger_1.ScrollTrigger);
const Template = () => {
    const windowWidth = (0, useWindowWidth_1.default)();
    const cardOne = (0, react_1.useRef)(null);
    const cardTwo = (0, react_1.useRef)(null);
    const imgOne = (0, react_1.useRef)(null);
    const imgTwo = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
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
    if (windowWidth >= useWindowWidth_1.mobile)
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#f5f5f7] rounded-3xl flex-row max-w-[1500px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col p-10 w-[60%]", children: [(0, jsx_runtime_1.jsx)(Card_1.default, { item: clientConfig_1.default.templates.basic, ref: cardOne }), (0, jsx_runtime_1.jsx)(Card_1.default, { item: clientConfig_1.default.templates.pro, ref: cardTwo })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex w-[40%] sticky top-0 h-[100vh]", children: [(0, jsx_runtime_1.jsx)(Image_1.default, { url: "/controllers/client/img/background.png", ref: imgOne }), (0, jsx_runtime_1.jsx)(Image_1.default, { url: "/controllers/client/img/ip.png", ref: imgTwo })] })] }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#f5f5f7] rounded-3xl flex-col", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full sticky top-0 h-[500px] template-image-background", children: [(0, jsx_runtime_1.jsx)(Image_1.default, { url: "/controllers/client/img/background.png", ref: imgOne }), (0, jsx_runtime_1.jsx)(Image_1.default, { url: "/controllers/client/img/ip.png", ref: imgTwo })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col p-10 w-full", children: [(0, jsx_runtime_1.jsx)(Card_1.default, { item: clientConfig_1.default.templates.basic, ref: cardOne, isMobile: true }), (0, jsx_runtime_1.jsx)(Card_1.default, { item: clientConfig_1.default.templates.pro, ref: cardTwo, isMobile: true })] })] }));
};
exports.default = Template;
