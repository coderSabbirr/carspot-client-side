import React from 'react';
import { useEffect, useState } from 'react';

import PackageCart from './PackageCart/PackageCart';
const TourPackages = () => {
    const[tourPackages,setTourPackages]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/packages')
        .then(res=>res.json())
        .then(data=>setTourPackages(data))
    },[])
    return (
        <div className="container our_package">
            <div className="mt-5 pt-5">
                <h2 className="custom_color text-center mb-5">Choose Your Package</h2>
               
                <div className="tourPackages">
                    {
                       tourPackages?.map(tourPackage=><PackageCart
                       key={tourPackage._id}
                       tourPackage={tourPackage}
                       >

                       </PackageCart>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default TourPackages;