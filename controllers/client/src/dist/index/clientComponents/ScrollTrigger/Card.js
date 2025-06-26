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
const react_1 = __importStar(require("react"));
const Text_1 = __importDefault(require("./Text"));
const clientConfig_1 = __importDefault(require("../../clientConfig"));
const Card = react_1.default.forwardRef((props, ref) => {
    const card = (0, react_1.useRef)(null);
    const one = (0, react_1.useRef)(null);
    const two = (0, react_1.useRef)(null);
    const three = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, () => ({
        card: card.current,
        one: one.current,
        two: two.current,
        three: three.current
    }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: "card-container", style: cardContainerStyle, children: [(0, jsx_runtime_1.jsxs)("div", { className: "card", ref: card, style: cardStyle, children: [(0, jsx_runtime_1.jsx)("div", { className: "card-face front", style: frontFaceStyle }), (0, jsx_runtime_1.jsx)("div", { className: "card-face back", style: backFaceStyle })] }), (0, jsx_runtime_1.jsx)(Text_1.default, { text: clientConfig_1.default.nfc.one, ref: one, className: 'bottom-[-70%] left-[0%] absolute w-[200px] z-10' }), (0, jsx_runtime_1.jsx)(Text_1.default, { text: clientConfig_1.default.nfc.two, ref: two, className: 'bottom-[-60%] left-[10%] absolute w-[200px] z-10' }), (0, jsx_runtime_1.jsx)(Text_1.default, { text: clientConfig_1.default.nfc.three, ref: three, className: 'bottom-[-80%] left-[20%] absolute w-[200px] z-10' })] }));
});
const cardContainerStyle = {
    maxWidth: '300px',
    maxHeight: '500px',
    width: '50vw',
    height: '83.33vw',
    minWidth: '200px',
    minHeight: '333.33px',
    perspective: '1500px',
    position: "sticky",
    top: "10%",
};
const cardStyle = {
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    animation: 'rotate 10s infinite linear',
};
const cardFaceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '20px',
    boxShadow: '0 30px 50px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
};
const frontFaceStyle = Object.assign(Object.assign({}, cardFaceStyle), { backgroundImage: "url('/controllers/client/img/instagram_front.png')", backgroundSize: 'cover', backgroundPosition: 'center' });
const backFaceStyle = Object.assign(Object.assign({}, cardFaceStyle), { backgroundImage: "url('/controllers/client/img/instagram_back.png')", backgroundSize: 'cover', backgroundPosition: 'center', transform: 'rotateY(180deg)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: '1.2em' });
exports.default = Card;
