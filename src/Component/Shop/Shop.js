import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  function handleAddToCart(product) {
    let newCart = [];
    const exists = cart.find(
      (selectedProduct) => product.id === selectedProduct.id
    );
    if (!exists) {
      console.log("not here");
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      console.log();
      const restProducts = cart.filter(
        (restProduct) => product.id !== restProduct.id
      );
      product.quantity = product.quantity + 1;
      newCart = [...restProducts, product];
    }
    setCart(newCart);
    addToDb(product.id);
  }
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((product) => {
        // console.log(product);
        return setProducts(product);
      });
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => id === product.id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  // useEffect(() => {
  //   const loadCart = getStoredCart();
  //   const saveCart = [];
  //   // console.log(loadCart);
  //   for (const id in loadCart) {
  //     const addedProduct = products.find((product) => product.id === id);
  //     console.log(addedProduct);
  //     if (addedProduct) {
  //       const quantity = loadCart[id];
  //       addedProduct.quantity = quantity;
  //       saveCart.push(addedProduct);
  //     }
  //     console.log(saveCart);
  //   }
  //   setCart(saveCart);
  // }, [products]);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              productDetails={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          );
        })}
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Shop;
