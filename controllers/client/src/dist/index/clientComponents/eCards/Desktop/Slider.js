"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const modules_1 = require("swiper/modules");
const react_1 = require("swiper/react");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
require("swiper/css/scrollbar");
const Card_1 = __importDefault(require("./Card"));
const Slider = () => {
    return ((0, jsx_runtime_1.jsxs)(react_1.Swiper, { modules: [modules_1.Pagination, modules_1.Navigation, modules_1.Autoplay], spaceBetween: 30, slidesPerView: 3, pagination: {
            clickable: true
        }, navigation: true, onSwiper: (swiper) => console.log(swiper), onSlideChange: () => console.log('slide change'), className: 'w-full max-w-[1020px]', autoplay: {
            delay: 5000,
            disableOnInteraction: true
        }, lazyPreloadPrevNext: 3, children: [(0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) }), "..."] }));
};
exports.default = Slider;
