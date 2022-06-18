import React from 'react';

// import data
import { features } from '../data';

const Features = () => {
  const { title, subtitle, image } = features;
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
          {/* image */}
          <div className='flex-1 order-1 lg:-order-1'>
            <img src={image.type} alt='' />
          </div>
          {/* text */}
          <div className='flex-1'>
            <h2 className='title'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
