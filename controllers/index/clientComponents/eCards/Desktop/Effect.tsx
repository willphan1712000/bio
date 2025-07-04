import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import Card from './Card';

export default function Effect() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[240px] h-[320px]"
      >
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
      </Swiper>
    </>
  );
}
