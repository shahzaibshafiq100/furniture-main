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
        <div className='flex-1 bg-pink'>
          <TestimonialSlider />
        </div>
        <div className='flex-1 bg-blue-200'>
          <img src={image.type} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
