import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  // console.log(props.cart)
  const { cart } = props;

  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // console.log(product)
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    let price = product.price;
    totalPrice = totalPrice + price * product.quantity;
    shipping = product.shipping + shipping;
    quantity = quantity + product.quantity;
  }

  let tax = (totalPrice * 5) / 100;
  let grandTotal = totalPrice + shipping + tax;

  return (
    <div className="cart">
      <h2 className="order-title">Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
      <button>
        Clear Cart <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Cart;
