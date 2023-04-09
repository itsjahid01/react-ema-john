import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import OrderReview from "../OrderReview/OrderReview";
import "./order.css";

const Order = () => {
  // data load from outside loader(custom loader)
  const cart = useLoaderData();
  console.log(cart);

  return (
    <div className="order-container">
      <div className="product-container">
        {cart.map((product) => (
          <OrderReview product={product} key={product.id}></OrderReview>
        ))}
      </div>
      <div className="cart-summary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
