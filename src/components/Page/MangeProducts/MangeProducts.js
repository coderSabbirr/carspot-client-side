import React, { useEffect, useState } from 'react';
import './MangeProducts.css';
import MangeSingleProducts from './MangeSingleProducts/MangeSingleProducts';
   

const MangeProducts = () => {


    const [addnewpackages, setAddnewpackages] = useState([])

    useEffect(() => {
        fetch('https://boiling-meadow-81562.herokuapp.com/products')
            .then((res) => res.json())
            .then(data => setAddnewpackages(data))
    }, [])
    return (
        <div>
            <div className="our_package-img">
                <h3>All Products</h3>
            </div>
             <div className="mangeProducts">
                    {
                        addnewpackages?.map(addnewpackage => <MangeSingleProducts
                            addnewpackage={addnewpackage}
                            key={addnewpackage._id}

                        >

                        </MangeSingleProducts>)
                    }
                </div>
                
        </div>
    );
};

export default MangeProducts;