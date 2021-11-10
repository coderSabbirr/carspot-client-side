import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner">
            <div>
            <h1>Find Your Dream Car </h1>
            <Link to="/products"className="banner_btn">Explore</Link>
            </div>
        </div>
    );
};

export default Banner;