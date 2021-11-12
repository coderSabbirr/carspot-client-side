import React from 'react';
import { Link } from 'react-router-dom';
import './FindStore.css';
const FindStore = () => {
    return (
        <div className="findStore">
           <div className="findstore-image">
               <img src="https://i.ibb.co/wzN2WP0/marquee-why1.jpg" alt="" />
           </div>
           <div className="findstore-text">
               <h1>Why Carspot<span className="why">?</span></h1>
               <h3>Like-new cars. And an approach unlike other dealers.</h3>
               <Link to="/products"><button className=" button--primary">Browse Cars</button></Link>
               <Link to="/products"><button className=" button--secndary">Schedule Pickup</button></Link>
               
           </div>
           
        </div>
    );
};

export default FindStore;