import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';


const AddNew = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    // const handleReviw= e =>{
    //     e.target.value;
    // }
    const onSubmit = (data) => {
        data.name = user.displayName;
        data.ratingKey=Math.random()
        data.email = user.email;
        data.photo = user.photoURL;
        const rating = parseInt(data.reating)

        if (5 >= rating) {
            fetch('http://localhost:4000/addreview', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((result) => {
    
                    alert('Review add Successfully');
                    window.location.reload();
    
                });
        }
        else {
            alert('Please Rating 1-5 Star');
        }

       

    };

    return (
        <div>
            <div className="our_package-img mb-5">
                <h2 className="text-center">Add Review</h2>
            </div>


            <div className="container addnew-packge">
                <form className=" add-form " onSubmit={handleSubmit(onSubmit)} >

                    <input placeholder="Your Feedback" {...register("doc", { required: true })} />
                    <br />
                    <input placeholder="Rating(1-5)"  {...register("reating", { required: true })} />

                    <br />
                    <input type="submit" value="Add Product" className="btn btn-primary" />
                </form>
            </div>


        </div >
    );
};

export default AddNew;