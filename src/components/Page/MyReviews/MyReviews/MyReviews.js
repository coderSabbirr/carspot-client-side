import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyReview from '../MyReview/MyReview';
import '../MyReview/MyReview.css';
const MyReviews = () => {
    const { user } = useAuth();
    const [myReviews, setMyReview] = useState([])
    useEffect(() => {
        const url = `https://boiling-meadow-81562.herokuapp.com/review/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyReview(data))

    }, [user.email])

    return (
        <div>
            <h3 className="our_package-img">My Review</h3>
            <div className="my-review-section">
                {
                    myReviews.map(myReview => <MyReview
                        myReview={myReview}
                        key={myReview._id}

                    ></MyReview>)
                }
            </div>
        </div>
    );
};

export default MyReviews;