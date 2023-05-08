import React from "react";
import "./Cart.css";

const Cart = (props) => {
  let item = 0;
  let price = 0;
  let shipping = 0;
  let tax;
  let grandTotal;
  for (const product of props.cart) {
    item = item + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping;

    tax = (price * 0.1).toFixed(5);
    grandTotal = price + shipping + Number(tax);
  }
  return (
    <div className="cart">
      <div className="cart-details">
        <h4>Order Summary</h4>
        <h6>Selected Items: {item}</h6>
        <h6>Total Price: {price}</h6>
        <h6>Shipping charge: {shipping}</h6>
        <h6>tax: {tax}</h6>
        <h6>Total Price: {grandTotal}</h6>
        <button>clear order</button>
        <button>Review order order</button>
      </div>
    </div>
  );
};

export default Cart;
