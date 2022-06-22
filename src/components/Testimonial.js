import React from 'react';

// import components
import TestimonialSlider from './TestimonialSlider';
// import data
import { testimonial } from '../data';

const Testimonial = () => {
  const { image, title } = testimonial;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-10'>
          <div className='lg:max-w-[50%]'>
            <h2 className='title mb-9'>{title}</h2>
            <TestimonialSlider />
          </div>
          <img src={image.type} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
