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
        {testimonial.persons.map((person, index) => {
          const { avatar, name, occupation, message } = person;
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col'>
                <div className='flex items-center gap-x-5'>
                  {/* avatar */}
                  <img src={avatar.type} alt='' />
                  <div>
                    <div>{name}</div>
                    <div>{occupation}</div>
                  </div>
                </div>
                {/* text */}
                <div>{message}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
