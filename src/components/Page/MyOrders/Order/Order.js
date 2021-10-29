import React from 'react';

const Order = ({order}) => {
    const handleDelete =id =>{
        const url=`http://localhost:4000/orders/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>console.log(data))
    }
 
    const{package_details}=order;
    const { name, day, cost, img }=package_details
    return (
        <div>
             <div className="tour_Cart">
                <img src={img} alt="" />
                <div className="p-2">
                    <div className="d-flex">
                        <h5 className="me-5">${cost}/Per Person</h5>
                        <h5 >{day}</h5>
                    </div>
                    <h2 className="custom_color">{name}</h2>
                    <button className="m-auto me-5 mt-5" onClick={()=> handleDelete(order._id)}>Cencel Order</button>
                    <button className="ms-5 mt-5" >{order.status}</button>
                </div>
            </div>
        </div>
    );
};

export default Order;