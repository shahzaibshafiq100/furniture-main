import React from 'react';
import Features from './components/Features';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import LatestItems from './components/LatestItems';

const App = () => {
  return (
    <div className='w-full max-w-[1440px] h-[5000px] mx-auto bg-white'>
      <Header />
      <Hero />
      <Features />
      <LatestItems />
    </div>
  );
};

export default App;
