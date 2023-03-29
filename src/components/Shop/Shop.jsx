import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;