import React, { useState, useEffect } from 'react';

// import logo
import Logo from '../assets/img/logo.svg';
// import icons
import { CgMenuRight } from 'react-icons/cg';

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? 'bg-primary py-4 lg:py-6' : 'bg-none'
      } fixed left-0 py-8 z-10 w-full transition-all duration-200`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <img className='h-6 lg:h-8' src={Logo} alt='' />
          {/* menu icon */}
          <div className='text-2xl lg:text-3xl text-white'>
            <CgMenuRight />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
