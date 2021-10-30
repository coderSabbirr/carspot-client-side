import React from 'react';
import './TourGuide.css'
const TourGuide = () => {
    return (
        <div className="container  tour-Guid">
            <div>
                <h5 className="custom_color">Tour Guide</h5>
                <h3>ALl Guide Are 5 Year ExPart In Travel</h3>
            </div>
            <div className="tour-cart-grid">
                <div className="tourguid_Cart">
                    <img src="https://i.ibb.co/MRCYX6K/guide-4-db1ff982.png" alt="" />
                    <h3 className="text-center">Sakura Chen</h3>
                    <h5 className="text-center" >Tour Guid</h5>
                </div>
                <div className="tourguid_Cart">
                    <img src="https://i.ibb.co/MfxwbFq/guide-3-fe55b700.png" alt="" />
                    <h3 className="text-center">Sakura Chen</h3>
                    <h5 className="text-center">Tour Guid</h5>
                </div>
                <div className="tourguid_Cart">
                    <img src="https://i.ibb.co/bLVDqXB/guide-1-a5da4cec.png" alt="" />
                    <h3 className="text-center">Sakura Chen</h3>
                    <h5 className="text-center">Tour Guid</h5>
                </div>
            </div>
        </div>
    );
};

export default TourGuide;