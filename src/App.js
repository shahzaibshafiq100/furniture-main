import React from 'react';
import Features from './components/Features';

// import components
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='w-full max-w-[1440px] h-[5000px] mx-auto bg-white'>
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default App;
