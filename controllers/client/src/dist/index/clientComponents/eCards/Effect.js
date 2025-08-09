import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Card from './Card';
export default function Effect({ products }) {
    const slideCSS = 'rounded-[40px] shadow-xl';
    return (_jsxs("div", { className: 'flex flex-col justify-center', children: [_jsx(Swiper, { effect: 'cards', grabCursor: true, modules: [EffectCards], className: "w-[240px] h-[320px]", children: products === null || products === void 0 ? void 0 : products.map((product, index) => (_jsx(SwiperSlide, { className: slideCSS, children: _jsx(Card, { product: product }) }, index))) }), _jsx("p", { className: 'text-center text-[0.8rem] p-[5px]', children: "Swipe left or right to see more" })] }));
}
