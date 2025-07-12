// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useWindowWidth, { mobile } from '../../hooks/useWindowWidth';
import Card from './Card';
import { ClientProducts } from '../api/ecard';

const Slider = ({ products }: ClientProducts) => {
  const windowWidth = useWindowWidth()
  const slideCSS = '!flex flex-row justify-center h-[400px]'
  const notMobile = windowWidth >= mobile

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={notMobile ? 30: 0}
      slidesPerView={notMobile ? 3 : 1}
      pagination={{
        clickable: true
      }}
      navigation
      className='w-full max-w-[1020px] card-slider'
      autoplay={{
        delay: 5000,
        disableOnInteraction: true
      }}
      lazyPreloadPrevNext={3}
    >
      
      {products?.map((product, index) => (
        <SwiperSlide key={index} className={slideCSS}><Card product={product}/></SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider