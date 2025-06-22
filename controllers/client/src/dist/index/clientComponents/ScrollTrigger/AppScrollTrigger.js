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
    const imgRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const el = imgRef.current;
        gsap_1.default.fromTo(el, {
            rotationY: 0,
        }, {
            rotationY: 360,
            scrollTrigger: {
                trigger: el,
                start: "top 20%",
                end: "bottom 40%",
                scrub: true,
                markers: false,
            }
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: "App", style: styles.container, children: (0, jsx_runtime_1.jsx)("header", { className: "App-header", children: (0, jsx_runtime_1.jsx)("div", { style: styles.spacer, children: (0, jsx_runtime_1.jsx)(Card_1.default, { ref: imgRef }) }) }) }));
}
const styles = {
    spacer: {
        padding: "50px",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    img: {
        position: "sticky",
        top: "20%"
    },
    appHeader: {
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
        perspective: "1500px",
        backfaceVisibility: "hidden",
    }
};
exports.default = AppScrollTrigger;
