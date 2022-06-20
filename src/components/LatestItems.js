import React from 'react';

// import data
import { newInStore } from '../data';

// import components
import LatestItemsSlider from './LatestItemsSlider';

const LatestItems = () => {
  const { title, subtitle, link, icon, products } = newInStore;
  return (
    <section className='section relative overflow-hidden min-h-[540px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex md:flex-col items-baseline gap-x-4'>
            <h2 className='title max-w-[245px]'>{title}</h2>
            <p className='max-w-[245px]'>{subtitle}</p>
            <a
              className='hover:border-b border-primary transition-all hidden'
              href='#'
            >
              {link}
            </a>
          </div>
          {/* product slider */}
          <div className='lg:max-w-[800px] xl:max-w-[1000px] lg:absolute lg:-right-24'>
            <LatestItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestItems;
