"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Card = react_1.default.forwardRef((props, ref) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "card-container", style: cardContainerStyle, children: (0, jsx_runtime_1.jsxs)("div", { className: "card", ref: ref, style: cardStyle, children: [(0, jsx_runtime_1.jsx)("div", { className: "card-face front", style: frontFaceStyle }), (0, jsx_runtime_1.jsx)("div", { className: "card-face back", style: backFaceStyle })] }) }));
});
const cardContainerStyle = {
    maxWidth: '300px',
    maxHeight: '500px',
    width: '50vw',
    height: '83.33vw',
    minWidth: '200px',
    minHeight: '333.33px',
    perspective: '1500px',
    position: 'sticky',
    top: '20%',
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
