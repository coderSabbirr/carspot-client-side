import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MangeReview from '../MangeReview/MangeReview';

const MangeReviews = () => {
    const { user } = useAuth();
    const [allReviews, setAllReviews] = useState([])
    useEffect(() => {
        const url = `https://boiling-meadow-81562.herokuapp.com/reviews`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllReviews(data))

    }, [user.email])

    return (
        <div>
            <h3 className="our_package-img">All Review</h3>
            <div className="my-review-section">
                {
                    allReviews.map(allReview => <MangeReview
                        allReview={allReview}
                        key={allReview._id}

                    ></MangeReview>)
                }
            </div>
        </div>
    );
};

export default MangeReviews;