import React, { useEffect, useState } from 'react';
import SingleOrderCart from './SingleOrderCart/SingleOrderCart';
import './mangeOrder.css'

const MangeOrder = () => {
    const[Orders,setOrders] =useState([])

    useEffect(() => {
fetch('http://localhost:4000/orders')
.then(res => res.json())
.then((data) =>setOrders(data))
    },[])
    return (
        <div className="container">
           <div className="mange-order">
           {
                Orders.map(order =><SingleOrderCart
                    order={order}
                    key={order._id}
                >

                </SingleOrderCart>)
            }
           </div>
        </div>
    );
};

export default MangeOrder;