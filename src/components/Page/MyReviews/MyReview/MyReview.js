import React from 'react';
import './MyReview.css';
const MyReview = ({ myReview }) => {
    const { reating, doc } = myReview;

    return (

        <div className="card text-dark bg-light mb-3 my-review  " >
            <div className="card-header">Review</div>
            <div className="card-body">
                <p className="card-title">Rating: {reating}</p>
                <p className="card-text">{doc}</p>
            </div>
        </div>

    );
};

export default MyReview;