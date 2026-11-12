https://roadmap.sh/projects/js-cart-total-calculator

Cart Total Calculator
A cart contains items with a price and quantity. Build a summary that calculates subtotal, discount, tax, and final total.

Write these functions:

calculateSubtotal(items) should add price * quantity for every item.

calculateDiscount(subtotal, discountPercent) should return the discount amount.

calculateTax(amountAfterDiscount, taxPercent) should return the tax amount after the discount.

createCartSummary(items, discountPercent, taxPercent) should return an object with subtotal, discount, tax, and total.

Sample checks:

js

const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];
console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));
const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));
