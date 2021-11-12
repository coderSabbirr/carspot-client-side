import './SingleOrderCart.css';
const SingleOrderCart = ({ order,Orders }) => {

    const{full_name,address,city,email,phone}=order;
    const{name,price}=order.package_details;


    const handleDelete = id => {
       
        if (window.confirm("Delete the item?")) {
            const url = `https://boiling-meadow-81562.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload();
                })

        }
        else {
            return
        }

    }


    const updateOrder = (id) => {

        const update = {
            status: "Approved"
        }
        const url = `https://boiling-meadow-81562.herokuapp.com/ordersupdate/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload();

            })

    }
    const status = order.status.status;
    let stutesbar = [];
    if (order.status.status === "Pending") {
        stutesbar = "Approve";
    }
    else {
        stutesbar = status;
    }

    return (
        <tbody>
        <tr>
            {/* <th scope="row">1</th> */}
            <td>{full_name}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{email}</td>
            <td>{address},{city}</td>
            <td>{phone}</td>
            <td><button className="btn btn-primary "  onClick={()=> updateOrder(order._id)}>{stutesbar}</button></td>
            <td><i onClick={()=> handleDelete(order._id)} className="fas fa-trash-alt delete-button text-center"></i></td>
            
                    
        </tr>
    </tbody>
    );
};

export default SingleOrderCart;