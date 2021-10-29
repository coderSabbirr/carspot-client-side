import React from 'react';
import './SinglePackages.css'
const SinglePackages = ({tourPackage}) => {
   const{name,day,cost,img,rating}=tourPackage;
    return (
        <div className="tour_Cart">
            <img src={img}  alt="" />
            <div className="d-flex">
            <h5 >${cost}/Per Person</h5>
            <h5 >{day}</h5>
            </div>
            <h2 className="custom_color">{name}</h2>
            <p>{rating}K+Rating</p>
            <div className="Book_now">Book Now</div>
        </div>
    );
};

export default SinglePackages;