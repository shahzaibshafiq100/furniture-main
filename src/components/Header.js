import React, { useState, useEffect } from 'react';

// import data
import { navigation } from '../data';
// import logo
import Logo from '../assets/img/logo.svg';
// import icons
import { CgMenuRight } from 'react-icons/cg';

const Header = () => {
  const [bg, setBg] = useState(false);
  // when our scrollY is bigger than 50px setBg to true, else false
  useEffect(() => {
    window.addEventListener('scroll', () => {
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
          <div className='text-2xl lg:text-3xl text-white'>
            <CgMenuRight />
          </div>
          {/* nav menu mobile */}
          <ul className='md:hidden bg-primary h-screen fixed bottom-0 left-0 w-3/5 lg:w-1/4'>
            {navigation.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.name}</a>
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
