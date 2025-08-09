import { jsx as _jsx } from "react/jsx-runtime";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useWindowWidth, { mobile } from '../../hooks/useWindowWidth';
import Card from './Card';
const Slider = ({ products }) => {
    const windowWidth = useWindowWidth();
    const slideCSS = '!flex flex-row justify-center h-[400px]';
    const notMobile = windowWidth >= mobile;
    return (_jsx(Swiper, { modules: [Pagination, Navigation, Autoplay], spaceBetween: notMobile ? 30 : 0, slidesPerView: notMobile ? 3 : 1, pagination: {
            clickable: true
        }, navigation: true, className: 'w-full max-w-[1020px] card-slider', autoplay: {
            delay: 5000,
            disableOnInteraction: true
        }, lazyPreloadPrevNext: 3, children: products === null || products === void 0 ? void 0 : products.map((product, index) => (_jsx(SwiperSlide, { className: slideCSS, children: _jsx(Card, { product: product }) }, index))) }));
};
export default Slider;
