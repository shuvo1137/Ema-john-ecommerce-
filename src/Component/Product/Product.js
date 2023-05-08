import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCart } = props;
  const { name, img, seller, price, ratings } = props.productDetails;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <div className="product-info">
        <p>{ratings}</p>
        <p>{seller}</p>
        <p>{price}</p>
      </div>
      <button
        onClick={() => {
          handleAddToCart(props.productDetails);
        }}
      >
        add to cart
      </button>
    </div>
  );
};

Product.propTypes = {};

export default Product;
