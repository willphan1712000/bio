"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const gsap_1 = __importDefault(require("gsap"));
const ScrollTrigger_1 = require("gsap/ScrollTrigger");
const react_1 = require("react");
const Card_1 = __importDefault(require("./Card"));
gsap_1.default.registerPlugin(ScrollTrigger_1.ScrollTrigger);
function AppScrollTrigger() {
    const cardRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!cardRef.current)
            return;
        const card = cardRef.current.card;
        const one = cardRef.current.one;
        const two = cardRef.current.two;
        const three = cardRef.current.three;
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 20%",
                end: "bottom 40%",
                scrub: true,
                markers: false,
            }
        }).fromTo(card, { rotationY: 0 }, { rotationY: 360 });
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 20%",
                end: "bottom 60%",
                scrub: true,
                markers: false,
            }
        }).fromTo(one, { opacity: 0 }, { opacity: 1 }).to(one, { opacity: 0 });
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 10%",
                end: "bottom 50%",
                scrub: true,
                markers: false,
            }
        }).fromTo(two, { opacity: 0 }, { opacity: 1 }).to(two, { opacity: 0 });
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 0%",
                end: "bottom 40%",
                scrub: true,
                markers: false,
            }
        }).fromTo(three, { opacity: 0 }, { opacity: 1 }).to(three, { opacity: 0 });
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: "App", style: styles.container, children: (0, jsx_runtime_1.jsx)("header", { className: "App-header", style: styles.appHeader, children: (0, jsx_runtime_1.jsx)("div", { style: styles.spacer, children: (0, jsx_runtime_1.jsx)(Card_1.default, { ref: cardRef }) }) }) }));
}
const styles = {
    spacer: {
        height: "120vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative"
    },
    appHeader: {
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "black",
        perspective: "1500px",
        backfaceVisibility: "hidden",
        position: "relative",
        padding: "50px"
    }
};
exports.default = AppScrollTrigger;
