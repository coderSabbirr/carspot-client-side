import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';


const AddNew = () => {
const{user}=useAuth();
    const { register, handleSubmit } = useForm();
console.log(user);
    const onSubmit = (data) => {
        data.name=user.displayName;
        data.email=user.email;
        data.photo=user.photoURL;
        
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

    };
    return (
        <div>
            <div className="our_package-img mb-5">
                <h2 className="text-center">Add Review</h2>
            </div>


            <div className="container addnew-packge">
            <form className=" add-form " onSubmit={handleSubmit(onSubmit)} >

                <input placeholder="Description" {...register("doc", { required: true })} />
                <br />
                <input placeholder="Rating" {...register("reating", { required: true })} />
               
                <br />
                <input type="submit" value="Add Product" className="btn btn-primary" />
            </form>
        </div>
            
            
        </div >
    );
};

export default AddNew;