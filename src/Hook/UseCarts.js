import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";
const useCarts = (products) => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedCart = products.find((product) => product.id === id);
      if (addedCart) {
        const quantity = storedCart[id];
        addedCart.quantity = quantity;
        saveCart.push(addedCart);
      }
    }
    setCarts(saveCart);
  }, [products]);

  return [carts, setCarts];
};
export default useCarts;
