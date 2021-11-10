import React, { useEffect, useState } from 'react';
import SingleProducts from '../Products/SingleProducts/SingleProducts';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container products">
            <div className="mt-5 pt-5">
                <h2 className="heading-color text-center">Latest <span className="cars-custom">Used Cars</span> For Sale</h2>
                <div className="products_cart card-group row-cols-2 row-cols-md-4 gap-3">
                    {
                        products?.slice(0, 6).map(product =><SingleProducts
                        product={product}
                        >

                        </SingleProducts> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;