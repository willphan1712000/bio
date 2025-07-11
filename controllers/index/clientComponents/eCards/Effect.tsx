import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Card from './Card';
import { ClientProducts } from '../api/ecard';

export default function Effect({ products }: ClientProducts) {
  const slideCSS = 'rounded-[40px] shadow-xl'
  return (
    <div className='flex flex-col justify-center'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[240px] h-[320px]"
      >
        {products?.map((product, index) => (
          <SwiperSlide key={index} className={slideCSS}><Card product={product}/></SwiperSlide>
        ))}
      </Swiper>
      <p className='text-center text-[0.8rem] p-[5px]'>Swipe left or right to see more</p>
    </div>
  );
}
