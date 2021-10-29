import React from 'react';
import { Link } from 'react-router-dom';
const PackageCart = ({tourPackage}) => {
   const{_id,name,day,cost,img,rating}=tourPackage;
    return (
        <div className="tour_Cart">
            <img src={img}  alt="" />
            <div className="p-2">
            <div className="d-flex">
            <h5 className="me-5">${cost}/Per Person</h5>
            <h5 >{day}</h5>
            </div>
            <h2 className="custom_color">{name}</h2>
            <p className="rating">{rating}K+Rating</p>
            <Link className="book_now" to={`/booking/${_id}`}>Book Now</Link>
            </div>
        </div>
    );
};

export default PackageCart;