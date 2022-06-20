import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import data
import { products } from '../data';

const ProductSlider = () => {
  const { pages } = products;
  return (
    <>
      <Swiper className='mySwiper'>
        {pages.map((page, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
                {page.productList.map((product, index) => {
                  return (
                    <div
                      className='w-full max-w-[290px] h-[380px] text-left'
                      key={index}
                    >
                      <div
                        className='border rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[15px]'
                        key={index}
                      >
                        <img src={product.image.type} alt='' />
                      </div>
                      <div className='font-semibold lg:text-xl'>
                        {product.name}
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <div>$ {product.price}</div>
                        <div className='text-[15px] text-grey line-through'>
                          $ {product.oldPrice}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductSlider;
