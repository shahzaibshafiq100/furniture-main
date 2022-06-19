import React from 'react';

// import data
import { navigation } from '../data';

const NavMobile = () => {
  return (
    <nav className='bg-white shadow-2xl w-full h-full'>
      <ul>
        {navigation.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
