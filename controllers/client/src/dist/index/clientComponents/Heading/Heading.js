"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const gsap_1 = __importDefault(require("gsap"));
const ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1.default.registerPlugin(ScrollTrigger_1.ScrollTrigger);
const Heading = () => {
    const backdropRef = (0, react_1.useRef)(null);
    const textRef = (0, react_1.useRef)(null);
    const greetingRef = (0, react_1.useRef)(null);
    const imgRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const backdrop = backdropRef.current;
        const text = textRef.current;
        const greeting = greetingRef.current;
        const img = imgRef.current;
        if (!backdrop || !text || !greeting || !img)
            return;
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: backdrop,
                start: "top 10%",
                end: "bottom 10%",
                scrub: 1,
                markers: false
            }
        }).fromTo(backdrop, { opacity: 0.9 }, { opacity: 0 });
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: text,
                start: "top 10%",
                end: "bottom 10%",
                scrub: 1,
                markers: false
            }
        }).fromTo(text, { scale: 0.5 }, { scale: 1 });
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: greeting,
                start: "top 20%",
                end: "bottom 20%",
                scrub: 1,
                markers: false
            }
        }).fromTo(greeting, { opacity: 1 }, { opacity: 0 });
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: img,
                start: "top 10%",
                end: "bottom 10%",
                scrub: 1,
                markers: false
            }
        }).fromTo(img, { scale: 1 }, { scale: 1.2 });
        window.addEventListener('resize', () => {
            ScrollTrigger_1.ScrollTrigger.refresh();
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { style: styles.container, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col justify-center items-center relative overflow-hidden", style: styles.sticky, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'overflow-hidden rounded-[30px] max-h-[700px] flex flex-col items-center', children: [(0, jsx_runtime_1.jsx)("img", { draggable: "false", src: '/controllers/client/img/background.png', className: "object-cover size-full relative", ref: imgRef }), (0, jsx_runtime_1.jsx)("div", { style: {
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: '#000',
                                pointerEvents: 'none',
                                borderRadius: "30px",
                                opacity: 0.9
                            }, ref: backdropRef }), (0, jsx_runtime_1.jsx)("div", { className: 'absolute top-[10%] w-[80%] max-w-[800px]', ref: greetingRef, children: (0, jsx_runtime_1.jsx)("img", { src: "/controllers/client/img/logo.png", className: 'size-full' }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'px-10', ref: textRef, children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-center text-[40px] text-black", children: clientConfig_1.default.heading.title }), (0, jsx_runtime_1.jsx)("h2", { className: "text-center text-white bg-[--primary] px-[15px] py-[5px] rounded-[40px] text-[40px]", children: clientConfig_1.default.heading.titleSpan })] })] }) }));
};
const styles = {
    container: {
        height: "180vh",
    },
    sticky: {
        position: "sticky",
        top: "10%"
    }
};
exports.default = Heading;
