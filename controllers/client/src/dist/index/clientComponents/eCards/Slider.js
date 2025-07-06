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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const useWindowWidth_1 = __importStar(require("../../hooks/useWindowWidth"));
const Card_1 = __importDefault(require("./Card"));
const Slider = ({ products }) => {
    const windowWidth = (0, useWindowWidth_1.default)();
    const slideCSS = '!flex flex-row justify-center h-[400px]';
    const notMobile = windowWidth >= useWindowWidth_1.mobile;
    return ((0, jsx_runtime_1.jsx)(react_1.Swiper, { modules: [modules_1.Pagination, modules_1.Navigation, modules_1.Autoplay], spaceBetween: notMobile ? 30 : 0, slidesPerView: notMobile ? 3 : 1, pagination: {
            clickable: true
        }, navigation: true, className: 'w-full max-w-[1020px] card-slider', autoplay: {
            delay: 5000,
            disableOnInteraction: true
        }, lazyPreloadPrevNext: 3, children: products === null || products === void 0 ? void 0 : products.map((product, index) => ((0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { className: slideCSS, children: (0, jsx_runtime_1.jsx)(Card_1.default, { product: product }) }, index))) }));
};
exports.default = Slider;
