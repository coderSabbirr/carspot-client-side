import React from 'react';
import Banner from './banner/Banner';
import Section1 from './Section1/Section1';
import TourGuide from './TourGuide/TourGuide';
import TourPackages from './TourPackages/TourPackages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPackages></TourPackages>
            <Section1></Section1>
            <TourGuide></TourGuide>
        </div>
    );
};

export default Home;