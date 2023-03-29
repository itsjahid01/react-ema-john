import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart)
    const {cart}=props;

    let totalPrice=0;
    let shipping=0;
    for (const product of cart) {
        console.log(product)
        let price=product.price;
        totalPrice=totalPrice+price;

        shipping=product.shipping+shipping;

    }
    let tax=totalPrice * 8/100;
    let grandTotal=totalPrice + shipping + tax;

    return (
        <div className='cart'>
            <h2 className='order-title'>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;