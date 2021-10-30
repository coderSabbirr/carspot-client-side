import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import NewPackage from './newPackage/NewPackage';
import './AddNew.js.css'

const AddNew = () => {
const[addnewpackages,setAddnewpackages]=useState([])

    useEffect(() => {
    fetch('http://localhost:4000/addnew/newpackage')
.then((res) =>res.json())
.then(data=> setAddnewpackages(data))
    },[])

    const { register, handleSubmit } = useForm();
    const newpackage = "newpackage"
    const onSubmit = (data) => {
        data.newpackage = newpackage;
        fetch("http://localhost:4000/addpackages", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {

            });
        
    };
    return (
        <div> 
            <div className="our_package-img mb-5">
<h2>Add A New Package</h2>
            </div>
            <div className="d-flex container">
            <div>
 {
     addnewpackages.map(addnewpackage=><NewPackage
        addnewpackage={addnewpackage}
        key={addnewpackage._id}

     >

     </NewPackage>)
 }
            </div>
            <div>
                <form className="shipping-form add-form " onSubmit={handleSubmit(onSubmit)} >

                    <input defaultValue="" placeholder="Package Name" {...register("name", { required: true })} />
                    <br />
                    <input defaultValue="5 Days/6 night" placeholder="Day" {...register("day", { required: true })} />
                    <br />
                    <input placeholder="Cost $" defaultValue="180" {...register("cost")} />
                    <br />
                    <input placeholder="Rating" defaultValue="8" {...register("rating")} />
                    <br />
                    <input placeholder="Img Link" defaultValue="" {...register("img", { required: true })} />
                    <br />
                    <input type="submit" value="Add Package" className="submit-btn" />
                </form>
            </div>
            
        </div>
        </div>
    );
};

export default AddNew;