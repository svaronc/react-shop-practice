/**
 * This function calculates the total price of the order
 * @param {Array} products cartProducts: Array of objects
 * @returns {number} Total price for cart
 */

export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum;
};
