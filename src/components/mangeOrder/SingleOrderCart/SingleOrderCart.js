import './SingleOrderCart.css'

const SingleOrderCart = ({order}) => {
    
    const{package_details} =order;
    const { name, day, cost, img } = package_details;
    const handleDelete =id => {
        if (window.confirm("Delete the item?")) {
            const url=`https://mighty-forest-85314.herokuapp.com/orders/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            window.location.reload();
        })
        
        }
        else {
            return
        }
       
    }

  
    const updateOrder = (id) => {

const update={
    status:"Approved"
}
        const url = `https://mighty-forest-85314.herokuapp.com/ordersupdate/${id}`;
        fetch(url , {
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
            const status=order.status.status;
            let stutesbar=[];
            if(order.status.status ==="Pending") {
                stutesbar="Approve Order";
             }
             else{
                stutesbar=status;
             }
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
                    <p className=" customer_n ">Customer Name : {order.full_name.toUpperCase()}</p>
                    <p className=" customer_e">Customer Email :{order.email}</p>
                    <button className="btn btn-danger me-4 mt-5 ms-5 Delete_Order" onClick={()=> handleDelete(order._id)}>Delete Order</button>
                    <button className="btn btn-primary updateOrder"  onClick={()=> updateOrder(order._id)}>{stutesbar}</button>
                </div>
            </div>
            
        </div>
    );
};

export default SingleOrderCart;