import Swal from 'sweetalert2';
import './SingleOrderCart.css';
const SingleOrderCart = ({ order,Orders }) => {
    const{full_name,address,city,email,phone}=order;
    const{name,price}=order.package_details;


    const handleDelete = id => {
       
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://boiling-meadow-81562.herokuapp.com/orders/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        window.location.reload();
                    })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
       
    }


    const updateOrder = (id) => {

        const update = {
            status: "Shipped"
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