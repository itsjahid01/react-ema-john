import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./OrderReview.css";

const OrderReview = ({ product, handleRemoveItem }) => {
  //   console.log(props);

  return (
    <div className="review-container">
      <img src={product.img} alt="" />
      <div className="order-product-info">
        <div className="order-info">
          <h4 className="title">{product.name}</h4>
          <p className="title">
            Price: <span className="style-text">${product.price}</span>
          </p>
          <p className="title">
            Quantity: <span className="style-text">{product.quantity}</span>
          </p>
        </div>
        <button
          onClick={() => handleRemoveItem(product.id)}
          className="delete-btn"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default OrderReview;
