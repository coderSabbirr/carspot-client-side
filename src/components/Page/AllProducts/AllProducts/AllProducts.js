import React, { useEffect, useState } from 'react';
import SingleProducts from '../../AllProducts/SingleProducts/SingleProducts';
const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://boiling-meadow-81562.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container products">
            <div className="mt-5 pt-5">
                <h2 className="heading-color text-center">Latest <span className="cars-custom">Used Cars</span> For Sale</h2>
                <div className="products_cart card-group row-cols-2 row-cols-md-4 gap-3">
                    {
                        products?.map(product =><SingleProducts
                        product={product}
                        key={product._id}
                        >

                        </SingleProducts> )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;