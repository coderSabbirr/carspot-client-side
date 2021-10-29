import React from 'react';
import './NewPackage.css'
const NewPackage = ({addnewpackage}) => {

    const handleDelete =id =>{
        const url=`http://localhost:4000/packages/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{

        })
    }
    const{_id,img,cost,day,name,}=addnewpackage;
    return (
        <div>
            <div className="tour_Cart addnewpackage">
                <img src={img} alt="" />
                <div className="p-2">
                    <div className="d-flex">
                        <h5 className="me-5">${cost}/Per Person</h5>
                        <h5 >{day}</h5>
                    </div>
                    <h2 className="custom_color">{name}</h2>
                    <button className="m-auto me-5 mt-5" onClick={()=> handleDelete(_id)}>Delete Package</button>
                </div>
            </div>
        </div>
    );
};

export default NewPackage;