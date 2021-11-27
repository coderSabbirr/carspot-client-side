import React from 'react';
import Swal from 'sweetalert2';
import './MangeReview.css';
const MangeReview = ({ allReview }) => {
    const { reating, doc, name, email, _id } = allReview;

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {


            if (result.isConfirmed) {
                const url = `https://boiling-meadow-81562.herokuapp.com/review/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        window.location.reload();
                    })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    return (

        <div className="card text-dark bg-light mb-3 my-review  " >
            <div className="card-header">Customer Review</div>
            <div className="card-body">
                <p className="card-title"><span className="review-deatil">Name:</span> {name}</p>
                <p className="card-title"><span className="review-deatil"> Email:</span> {email}</p>
                <p className="card-title"><span className="review-deatil">Rating:</span> {reating} </p>
                <p className="card-text"><span className="review-deatil">Feedback:</span> {doc}</p>
                <button className="review-delete-btn" onClick={() => handleDelete(_id)}> Delete Review </button>
            </div>
        </div>

    );
};

export default MangeReview;