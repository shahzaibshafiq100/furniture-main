import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';
// import data
import { testimonial } from '../data';

const TestimonialSlider = () => {
  return (
    <>
      <Swiper className='' navigation={true} modules={[Navigation]}>
        {testimonial.persons.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>testimonial slide</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
