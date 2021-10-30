import React from 'react';
import './Order.css'
const Order = ({order}) => {
    const handleDelete =id =>{
        if (window.confirm("Delete the item?")) {
            
            const url=`https://mighty-forest-85314.herokuapp.com/orders/${id}`
            fetch(url,{
                method:'DELETE'
            })
            
            .then(res => res.json())
            .then(data => {
    
            })
            window.location.reload();
        }
        else{
            return;
        }
       
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
                    <button className="m-auto me-5 mt-5 cencel-btn" onClick={()=> handleDelete(order._id)}>Cencel Order</button>
                    <button className=" mt-5 status-btn" >{order.status.status}</button>
                </div>
            </div>
        </div>
    );
};

export default Order;