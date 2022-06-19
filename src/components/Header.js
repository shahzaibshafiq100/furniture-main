import React, { useState, useEffect } from 'react';

// import data
import { navigation } from '../data';
// import logo
import Logo from '../assets/img/logo.svg';
// import icons
import { CgMenuRight } from 'react-icons/cg';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    // add event listener
    window.addEventListener('scroll', () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        // if bg is true
        bg
          ? 'bg-primary py-4 lg:py-6'
          : // if bg is false
            'bg-none'
      }
      fixed left-0 py-8 z-10 w-full transition-all duration-200`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <img className='h-6 lg:h-8' src={Logo} alt='' />
          {/* menu icon */}
          <div className='md:hidden text-2xl lg:text-3xl text-white'>
            <CgMenuRight />
          </div>
          {/* nav menu mobile */}
          <ul className='bg-primary text-white h-screen fixed bottom-0 left-0 w-3/5 md:relative md:w-auto md:h-auto md:flex md:gap-x-12 md:bg-transparent'>
            {navigation.map((item, index) => {
              return (
                <li key={index}>
                  <a className='capitalize' href={item.href}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
