import React from 'react';
import './CustomerReview.css';
const CustomerReview = ({review}) => {
    console.log(review.doc)
    const{name,photo,reating,doc}=review;
    return (
        
           
  <div class="col-md-6 mb-4 review-card">
    <div class="card">
      <div class="card-body">
        <p>{reating}</p>
        <p class="card-text">"{doc}"</p>
      </div>
      <img src={photo} class="card-img-top" alt="..."/>
      <h3>{name}</h3>
    </div>
  </div>
      
        
    );
};

export default CustomerReview;