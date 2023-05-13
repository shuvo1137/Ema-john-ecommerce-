import React from "react";
import "./ReviewProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewProduct = (props) => {
  const { name, quantity, img, price } = props.product;
  return (
    <div className="review-container">
      <img src={img} alt=""></img>
      <div className="product-description-container">
        <div className="product-description">
          <h3 title={name}>
            {name.length > 20 ? name.slice(0, 20) + "... " : name}
          </h3>
          <p>Price: {price}</p>
          <p>Amount: {quantity}</p>
        </div>
        <button className="button">
          <FontAwesomeIcon
            className="button-icon"
            icon={faTrashAlt}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewProduct;
