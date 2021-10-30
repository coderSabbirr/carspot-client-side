import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Order from './Order/Order';
import './myorders.css'

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, SetOrders] = useState([])
    useEffect(() => {
        const url = `http://localhost:4000/orders/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => SetOrders(data))

    }, [])



    return (
        <div>
            <div className="our_package-img">
                <h2>My Order</h2>
            </div>
            <div className="container">
            <div className="myorders mt-5">
                {

                    myOrders?.map(order => <Order
                        order={order}
                        key={order._id}
                    ></Order>)

                }
            </div>
        </div>
        </div>
    );
};

export default MyOrders;