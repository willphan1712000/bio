// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from './Card';
const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      pagination={{
        clickable: true
      }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='w-full max-w-[1020px]'
      autoplay={{
        delay: 5000,
        disableOnInteraction: true
      }}
      lazyPreloadPrevNext={3}
    >
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      ...
    </Swiper>
  );
};
export default Slider