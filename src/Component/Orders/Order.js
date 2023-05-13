import React from "react";
import useProducts from "../../Hook/Products";
import useCarts from "../../Hook/UseCarts";
import Cart from "../Cart/Cart";
import ReviewProduct from "../ReviewProduct/ReviewProduct";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [carts, setCarts] = useCarts(products);
  return (
    <div className="shop-container">
      <div className="product-container">
        {carts.map((product) => (
          <ReviewProduct product={product}></ReviewProduct>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={carts}></Cart>
      </div>
    </div>
  );
};

export default Order;
