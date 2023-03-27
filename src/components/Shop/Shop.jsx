import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

     const handleAddToCart = (product) =>{
        // console.log(product)
        const newArr=[...cart,product];
        setCart(newArr);
     }

    return (
        <div className='shopping-container'>
            <div className='products-container'>
                {
                    products.map( product =>
                        // console.log(product)
                       <Product product={product}
                       key={product.id}
                       handleAddToCart={handleAddToCart}
                       ></Product>
                    )
                }
            </div>
            <div className='order-summary'>
                <h2 className='order-title'>Order Summary</h2>
                <p className='selected-items'>Selected Items: {cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;