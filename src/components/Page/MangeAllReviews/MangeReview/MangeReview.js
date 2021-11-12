import React from 'react';
import './MangeReview.css';
const MangeReview = ({ allReview }) => {
    const { reating, doc,name,email,_id } = allReview;

    const handleDelete = id => {
        if (window.confirm("Delete the Review?")) {
            const url = `https://boiling-meadow-81562.herokuapp.com/review/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload();
                })

        }
        else {
            return;
        }

    }
    return (

        <div className="card text-dark bg-light mb-3 my-review  " >
            <div className="card-header">Customer Review</div>
            <div className="card-body">
                <p className="card-title"><span className="review-deatil">Name:</span> {name}</p>
                <p className="card-title"><span className="review-deatil"> Email:</span> {email}</p>
                <p className="card-title"><span className="review-deatil">Rating:</span> {reating} </p>
                <p className="card-text"><span className="review-deatil">Feedback:</span> {doc}</p>
                <button className="review-delete-btn"  onClick={() => handleDelete(_id)}> Delete Review </button>
            </div>
        </div>

    );
};

export default MangeReview;