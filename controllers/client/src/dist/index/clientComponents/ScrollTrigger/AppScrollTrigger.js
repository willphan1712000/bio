"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const gsap_1 = __importDefault(require("gsap"));
const ScrollTrigger_1 = require("gsap/ScrollTrigger");
const react_1 = require("react");
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const Card_1 = __importDefault(require("./Card"));
gsap_1.default.registerPlugin(ScrollTrigger_1.ScrollTrigger);
function AppScrollTrigger() {
    const cardRef = (0, react_1.useRef)(null);
    const headerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!cardRef.current)
            return;
        if (!headerRef.current)
            return;
        const card = cardRef.current.card;
        const one = cardRef.current.one;
        const two = cardRef.current.two;
        const three = cardRef.current.three;
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 10%",
                end: "300% 20%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(card, { rotationY: 0 }, { rotationY: 360 });
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: one,
                start: "top 65%",
                end: "bottom 55%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(one, { opacity: 0 }, { opacity: 1 }).to(one, { opacity: 0 });
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: two,
                start: "110% 50%",
                end: "210% 40%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(two, { opacity: 0 }, { opacity: 1 }).to(two, { opacity: 0 });
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: three,
                start: "220% 35%",
                end: "320% 25%",
                scrub: 1,
                markers: false,
            }
        }).fromTo(three, { opacity: 0 }, { opacity: 1 }).to(three, { opacity: 0 });
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: "App", style: styles.container, children: (0, jsx_runtime_1.jsxs)("header", { className: "App-header", style: styles.appHeader, ref: headerRef, children: [(0, jsx_runtime_1.jsx)("div", { className: '', children: (0, jsx_runtime_1.jsx)("h1", { className: "text-[25px]", style: styles.title, children: clientConfig_1.default.nfc.title }) }), (0, jsx_runtime_1.jsx)("div", { style: styles.spacer, children: (0, jsx_runtime_1.jsx)(Card_1.default, { ref: cardRef }) })] }) }));
}
const styles = {
    container: {
        width: "100%",
        maxWidth: "1500px",
    },
    spacer: {
        height: "200lvh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative"
    },
    appHeader: {
        minHeight: "100lvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "black",
        perspective: "1500px",
        backfaceVisibility: "hidden",
        position: "relative",
        padding: "50px",
        backgroundColor: "#f5f5f7",
        borderRadius: "30px"
    },
    title: {
        borderRadius: '5px',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundColor: '#4158d0',
        backgroundImage: 'linear-gradient(43deg, #4158d0, #c850c0 46%, #ffcc70)',
        margin: '0',
        textAlign: 'center',
        padding: '30px'
    }
};
exports.default = AppScrollTrigger;
