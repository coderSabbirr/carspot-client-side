import React from 'react';
import CustomerReviews from '../CustomerReviews/CustomerReviews/CustomerReviews';
import Products from '../Home/Products/Products';
import Banner from './banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
           <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;