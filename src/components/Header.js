import React from 'react';

// import logo
import Logo from '../assets/img/logo.svg';
// import icons
import { CgMenuRight } from 'react-icons/cg';

const Header = () => {
  return (
    <header className='fixed py-8 z-10 w-full'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <img src={Logo} alt='' />
          {/* menu icon */}
          <div className='text-2xl text-white'>
            <CgMenuRight />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
