import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import OrderReview from "../OrderReview/OrderReview";
import "./order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  // data load from outside loader(custom loader)
  const savedCart = useLoaderData();
  // console.log(savedCart);
  const [cart, setCart] = useState(savedCart);

  const handleRemoveItem = (id) => {
    // console.log("paici", id);
    const remaining = cart.filter((pd) => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    // console.log("paici");
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="order-container">
      <div className="product-container">
        {cart.map((product) => (
          <OrderReview
            product={product}
            key={product.id}
            handleRemoveItem={handleRemoveItem}
          ></OrderReview>
        ))}
      </div>
      <div className="cart-summary">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/checkout">
            <button className="credit-card-btn">
              Proceed Checkout <FontAwesomeIcon icon={faCreditCard} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
