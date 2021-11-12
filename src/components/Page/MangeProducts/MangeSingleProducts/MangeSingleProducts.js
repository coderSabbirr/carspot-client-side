import React from 'react';
import './MangeSingleProducts.css';
const MangeSingleProducts = ({ addnewpackage }) => {

    const handleDelete = id => {
        if (window.confirm("Delete the item?")) {
            const url = `http://localhost:4000/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload();
                })

        }
        else {
            return;
        }

    }
    const { name, since, price, location, img, _id } = addnewpackage
    return (
        <div className="card mb-3 full-card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="vehicel-since ">{since}</p>
                        <div className="vehical-header ">
                            <h2 className="card-title vehicel-name">{name}</h2>
                            <h5 className="price">${price}</h5>
                        </div>
                        <section className="vehicle-location">
                            <span className="vehicle-card-location-icon">
                                <svg viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg"><path d="M3.495 0C5.426 0 6.989 1.515 7 3.388 7 5.502 4.927 8.49 3.972 9.763a.59.59 0 01-.944 0C2.073 8.49 0 5.503 0 3.388 0 1.515 1.563 0 3.495 0zM3.5 6C4.878 6 6 4.894 6 3.5 6 2.122 4.878 1 3.5 1A2.503 2.503 0 001 3.5C1 4.878 2.122 6 3.5 6z"></path></svg>
                            </span>
                            {location}
                        </section>
                        <section>
                            <button className=" delete-product me-5 " onClick={() => handleDelete(_id)}>Delete Products</button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MangeSingleProducts;