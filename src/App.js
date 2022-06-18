import React from 'react';
import Features from './components/Features';

// import components
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='w-full max-w-[1440px] h-[5000px] mx-auto bg-white'>
      <Hero />
      <Features />
    </div>
  );
};

export default App;
