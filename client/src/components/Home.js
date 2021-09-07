import React from 'react';
import Hero from './Hero'
import Products from './Products';

const Home = ({products, addToCart, totalCost}) => (
    <>
        <Hero/>
        <Products products={products} addToCart={addToCart} totalCost={totalCost}/>
    </>
);

export default Home;