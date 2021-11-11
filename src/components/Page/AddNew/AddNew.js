import React from 'react';
import { useForm } from "react-hook-form";
import './AddNew.css';

const AddNew = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch('http://localhost:4000/addpackages', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Prodcut add Successfully');
                window.location.reload();

            });

    };
    return (
        <div>
            <div className="our_package-img mb-5">
                <h2>Add A New Package</h2>
            </div>


            <div className="container addnew-packge">
            <form className=" add-form " onSubmit={handleSubmit(onSubmit)} >

                <input placeholder="Car Name" {...register("name", { required: true })} />
                <br />
                <input placeholder="Since" {...register("since", { required: true })} />
                <br />
                <input placeholder="Price"  {...register("price", { required: true })} />
                <br />
                <input placeholder="Location"  {...register("location", { required: true })} />
                <br />
                <input placeholder="Img Link"  {...register("img", { required: true })} />
                <br />
                <input type="submit" value="Add Product" className="btn btn-success" />
            </form>
        </div>
            
            
        </div >
    );
};

export default AddNew;