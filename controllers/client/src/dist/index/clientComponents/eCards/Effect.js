"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Effect;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("swiper/react");
require("swiper/css");
require("swiper/css/effect-cards");
const modules_1 = require("swiper/modules");
const Card_1 = __importDefault(require("./Card"));
function Effect() {
    const slideCSS = 'rounded-[40px] shadow-xl';
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'py-10 flex flex-col justify-center', children: [(0, jsx_runtime_1.jsxs)(react_1.Swiper, { effect: 'cards', grabCursor: true, modules: [modules_1.EffectCards], className: "w-[240px] h-[320px]", children: [(0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { className: slideCSS, children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { className: slideCSS, children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { className: slideCSS, children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { className: slideCSS, children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { className: slideCSS, children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { className: slideCSS, children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { className: slideCSS, children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { className: slideCSS, children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) })] }), (0, jsx_runtime_1.jsx)("p", { className: 'text-center text-[0.8rem] p-[5px]', children: "Swipe left or right to see more" })] }));
}
