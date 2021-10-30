import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { bookingId } = useParams();
    const [booking, setBooking] = useState([])

    useEffect(() => {
        const url = `https://mighty-forest-85314.herokuapp.com/packages/${bookingId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    // const status ="Pending"
    
    const { name, day, cost, img } = booking;
    const onSubmit = (data) => {
        const update={
            status:"Pending"
        }
        data.status=update;
        data.package_details=booking;
        data.email = user?.email;
        fetch("https://mighty-forest-85314.herokuapp.com/packages", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
              
          });
       
      };
    
    return (
       <div> 
           <div className="our_package-img">
               <h1 className="Booking_heading">Booking Details </h1>
           </div>
            <div className="d-flex container booking-sec">
            <div className="tour_Cart">
                <img src={img} alt="" />
                <div className="p-2">
                    <div className="d-flex">
                        <h5 className="me-5">${cost}/Per Person</h5>
                        <h5 >{day}</h5>
                    </div>
                    <h2 className="custom_color">{name}</h2>
                </div>
            </div>
            <div>
               
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)} >

                        <input defaultValue={user.displayName} {...register("full_name")} />
                        <br />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <br />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <br />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <br />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />
                        <br />
                        <input type="submit" value="Confirm" className="submit-btn" />
                    </form>
                </div>
            </div>
       </div>
        
    );
};

export default Booking;