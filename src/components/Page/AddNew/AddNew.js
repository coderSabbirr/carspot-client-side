import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './AddNew.css';
import NewPackage from './newPackage/NewPackage';

const AddNew = () => {
    const [addnewpackages, setAddnewpackages] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then((res) => res.json())
            .then(data => setAddnewpackages(data))
    }, [])

    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        fetch('http://localhost:4000/addpackages', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
              
                    alert('added Successfully');
                    window.location.reload();
                
            });
           
    };
    return (
        <div>
            <div className="our_package-img mb-5">
                <h2>Add A New Package</h2>
            </div>
            <div className="d-flex container addnew-packge">
               
                <div >
                    <form className=" add-form " onSubmit={handleSubmit(onSubmit)} >

                        <input  placeholder="Car Name" {...register("name", { required: true })} />
                        <br />
                        <input  placeholder="Since" {...register("since", { required: true })} />
                        <br />
                        <input placeholder="Price"  {...register("price", { required: true })} />
                        <br />
                        <input placeholder="Location"  {...register("location", { required: true })} />
                        <br />
                        <input placeholder="Img Link"  {...register("img", { required: true })} />
                        <br />
                        <input type="submit" value="Add Product" className="submit-btn" />
                    </form>
                </div>
                <div className="new_cart">
                    {
                        addnewpackages?.map(addnewpackage => <NewPackage
                            addnewpackage={addnewpackage}
                            key={addnewpackage._id}

                        >

                        </NewPackage>)
                    }
                </div>
                

            </div>
        </div>
    );
};

export default AddNew;