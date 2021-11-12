import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import './CustomerReviews.css';
const CustomerReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://boiling-meadow-81562.herokuapp.com/reviews`)
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container text-center reviews-sec">
            <h4 className="review-h4">THE PRODUCTS</h4>
            <h2>Customer Review</h2>
            <div className="row row-cols-1 row-cols-md-6 allreviews">
                {
                    reviews.map(review => <CustomerReview
                        review={review}
                        key={review._id}
                    ></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default CustomerReviews;