import { list } from 'postcss';
import React from 'react';

// import data
import { products } from '../data';

const Products = () => {
  const { title, subtitle, productList } = products;
  return (
    <section className='section bg-pink'>
      <div className='container mx-auto'>
        <div>
          <h2 className='title'>{title}</h2>
          <p className='subtitle'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
