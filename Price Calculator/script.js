function calculateDiscount(price, discountPercent){
  let discountAmount = price * (discountPercent/100);
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


function createPriceSummary(price, discountPercent, taxPercent){
    
    let priceAfterDiscount = price - calculateDiscount(price, discountPercent);
    
    
    return {
        
        price : price,
        discount : calculateDiscount(price, discountPercent),
        tax : calculateTax(priceAfterDiscount, taxPercent),
        finalPrice : calculateFinalPrice(price, discountPercent, taxPercent)
      
      
    }
  
  
}


console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));