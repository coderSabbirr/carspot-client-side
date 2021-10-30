import React from 'react';
import './SingleOrderCart.css'

const SingleOrderCart = ({order}) => {
    const{package_details} =order;
    const { name, day, cost, img } = package_details;
    const handleDelete =id => {
        const url=`http://localhost:4000/orders/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{

        })
    }
//    const data='updatenew'
//     const updateOrder = id => {

//         const url = `http://localhost:4000/ordersupdate/${id}`;
//         fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//             }
    return (
        <div className="">
            <div className="tour_Cart single-Order-Cart ">
                <img src={img} alt="" />
                <div className="p-2">
                    <div className="d-flex">
                        <h5 className="me-5">${cost}/Per Person</h5>
                        <h5 >{day}</h5>
                    </div>
                    <h2 className="custom_color">{name}</h2>
                    <p className="text-primary">Customer Name :{order.full_name}</p>
                    <p className="custom_color">Customer Email :{order.email}</p>
                    <button className="btn btn-primary me-4 mt-5 ms-5" onClick={()=> handleDelete(order._id)}>Delete Order</button>
                    <button className="btn btn-danger mt-5" >Approve Order</button>
                </div>
            </div>
            
        </div>
    );
};

export default SingleOrderCart;