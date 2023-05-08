function addToDatabase(id) {
  let shoppingCart = {};

  let storedCart = localStorage.getItem("shopping-cart", id);

  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  let quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}
// function addToDatabase(id) {
//   let quantity = localStorage.getItem(id);
//   let newQuantity;
//   if (quantity) {
//     newQuantity = Number(quantity) + 1;
//     localStorage.setItem(id, newQuantity);
//   } else {
//     localStorage.setItem(id, 1);
//   }
// }

export { addToDatabase };
