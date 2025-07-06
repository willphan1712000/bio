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
  const slideCSS = 'rounded-[40px] shadow-xl'
  return (
    <div className='py-10 flex flex-col justify-center'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[240px] h-[320px]"
      >
        <SwiperSlide className={slideCSS}><Card /></SwiperSlide>
        <SwiperSlide className={slideCSS}><Card /></SwiperSlide>
        <SwiperSlide className={slideCSS}><Card /></SwiperSlide>
        <SwiperSlide className={slideCSS}><Card /></SwiperSlide>
        <SwiperSlide className={slideCSS}><Card /></SwiperSlide>
        <SwiperSlide className={slideCSS}><Card /></SwiperSlide>
        <SwiperSlide className={slideCSS}><Card /></SwiperSlide>
        <SwiperSlide className={slideCSS}><Card /></SwiperSlide>
      </Swiper>
      <p className='text-center text-[0.8rem] p-[5px]'>Swipe left or right to see more</p>
    </div>
  );
}
