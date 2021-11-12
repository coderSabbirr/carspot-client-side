import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { bookingId } = useParams();
    const [booking, setBooking] = useState([])

    useEffect(() => {
        const url = `https://boiling-meadow-81562.herokuapp.com/products/${bookingId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [bookingId])

    // const status ="Pending"

    const onSubmit = (data) => {
        const update = {
            status: "Pending"
        }
        data.status = update;
        data.package_details = booking;
        data.user_email = user?.email;
        fetch("https://boiling-meadow-81562.herokuapp.com/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {

            });
        alert("Order successfull")

    };
    const { name, price, since, img, location } = booking;
    return (

        <div>
            <div className="our_package-img">
                <h1 className="Booking_heading">Booking Details </h1>
            </div>

            <div className="d-flex container booking-sec">
                <div className="card mb-3 order-summary">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="since">{since}</p>
                                <div className="vehical-header">
                                    <h2 className="card-title">{name}</h2>
                                    <h5 className="price">${price}</h5>
                                </div>
                                <section className="vehicle-card-location">
                                    <span className="vehicle-card-location-icon">
                                        <svg viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg"><path d="M3.495 0C5.426 0 6.989 1.515 7 3.388 7 5.502 4.927 8.49 3.972 9.763a.59.59 0 01-.944 0C2.073 8.49 0 5.503 0 3.388 0 1.515 1.563 0 3.495 0zM3.5 6C4.878 6 6 4.894 6 3.5 6 2.122 4.878 1 3.5 1A2.503 2.503 0 001 3.5C1 4.878 2.122 6 3.5 6z"></path></svg>
                                    </span>
                                    {location}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)} >

                        <input defaultValue={user.displayName} {...register("full_name")} />
                        <br />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <br />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address",{ required: true })} />
                        <br />
                        <input placeholder="City" defaultValue="" {...register("city",{ required: true })} />
                        <br />
                        <input placeholder="phone number" defaultValue="" {...register("phone",{ required: true })} />
                        <br />
                        <input type="submit" value="Confirm" className="submit-btn" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Booking;