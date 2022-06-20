import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';

// import data
import { newInStore } from '../data';

const LatestItemsSlider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {newInStore.products.map((product, index) => {
          return (
            <SwiperSlide className='max-w-[265px]' key={index}>
              <div className='relative'>
                <img src={product.image.type} alt='' />
                <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] font-semibold capitalize'>
                  {product.name}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default LatestItemsSlider;
