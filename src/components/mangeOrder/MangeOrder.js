import React, { useEffect, useState } from 'react';
import './mangeOrder.css';
import SingleOrderCart from './SingleOrderCart/SingleOrderCart';

const MangeOrder = () => {
    const [Orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/orders')
            .then(res => res.json())
            .then((data) => setOrders(data))
    }, [])
    return (
        <div>
            <div className="our_package-img">
                <h2> All Orders</h2>
            </div>
            <div className="container mange_ordermain">
                <div className="mange-order table-responsive">
                    <table class="table table-bordered border-primary ">
                        <thead class="table-dark ">
                            <tr>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Statues</th>
                                <th scope="col">Cencel Order</th>
                            </tr>
                        </thead>
                        {
                            Orders.map(order => <SingleOrderCart
                                order={order}
                                key={order._id}
                                Orders={Orders}
                            >

                            </SingleOrderCart>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MangeOrder;