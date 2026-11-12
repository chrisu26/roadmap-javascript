function calculateDiscount(subtotal, discountPercent){
  let discountAmount = subtotal * (discountPercent/100);
  return discountAmount;
}

function calculateTax(priceAfterDiscount, taxPercent){
  let taxAmount = priceAfterDiscount * (taxPercent/100);
  return taxAmount;
}

function calculateFinalPrice(price, discountPercent, taxPercent){
  let discountAmount = calculateDiscount(price, discountPercent);
  let priceAfterDiscount = price - discountAmount;
  let tax = calculateTax(priceAfterDiscount, taxPercent);
  
  return priceAfterDiscount + tax;
  
    
}


function calculateSubtotal(items){
    let subTotal = 0;
    for (let i = 0; i < items.length; i++){
        let price = items[i].price;
        let quantity = items[i].quantity;
       
        
        subTotal += price*quantity;
      
    }
  
  return subTotal;
  
}


const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];

console.log(calculateSubtotal(cartItems));


function createPriceSummary(price, discountPercent, taxPercent){
    
    let priceAfterDiscount = price - calculateDiscount(price, discountPercent);
    
    
    return {
        
        price : price,
        discount : calculateDiscount(price, discountPercent),
        tax : calculateTax(priceAfterDiscount, taxPercent),
        finalPrice : calculateFinalPrice(price, discountPercent, taxPercent)
      
      
    }
  
  
}


function createCartSummary(items, discountPercent, taxPercent){
  
  let subtotal = calculateSubtotal(items);
  let discount = calculateDiscount(subtotal, discountPercent);
  let tax = calculateTax (discount, taxPercent);
  
  return {
    
      subtotal : subtotal,
      discount : discount,
      tax : tax,
      total : calculateFinalPrice(subtotal, discountPercent, taxPercent)
    
  }
  
  
}

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));



console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));
const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));