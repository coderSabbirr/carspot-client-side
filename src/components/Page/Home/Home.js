import React from 'react';
import CustomerReviews from '../CustomerReviews/CustomerReviews/CustomerReviews';
import Products from '../Home/Products/Products';
import Banner from './banner/Banner';
import FindStore from './FindStore/FindStore';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
           <CustomerReviews></CustomerReviews>
           <FindStore></FindStore>
        </div>
    );
};

export default Home;