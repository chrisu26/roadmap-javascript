function isPositive(number){
  if (number > 0){
    return true;
  }
  return false;
}

function isNegative(number){
  if (number < 0){
    return true;
  }
  return false;
}

function isZero(number){
  if (number === 0){
    return true;
  }
  return false;
}

function isEven(number){
  if (number % 2 === 0){
    return true;
  }
  return false;
}

function isOdd(number){
  if(!isEven(number)){
    return true;
  }
  return false;
}

function describeNumber(number){
  
  return {
  
  positive: isPositive(number),
  negative: isNegative(number),
  zero: isZero(number),
  even: isEven(number),
  odd: isOdd(number)
}};


console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));