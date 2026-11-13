function calculateTotal(expenses){
  let totalExpenses = 0;
  for (let i = 0; i < expenses.length; i++){   
      let amount = expenses[i].amount;
      totalExpenses += amount;
  }
  return totalExpenses; 
}


function calculateCategoryTotal(expenses, category){  
  let totalCategory = 0;
  for (let i = 0; i < expenses.length; i++){
      let expensesCategory = expenses[i].category;
      let amount = expenses[i].amount; 
      if (expensesCategory === category){
        totalCategory += amount;
      }
    totalCategory += 0;
  }
  return totalCategory;   
}


function findLargestExpense(expenses){
  let amountA = expenses[0].amount;
  let amountB = 0;
  let j = 0;
  for (let i = 1; i < expenses.length; i++){
    amountB = expenses[i].amount;
    if (amountA >= amountB ){
      continue;
    }
    amountA = amountB
    j = i
  } 
  return expenses[j]; 
}


function createExpenseSummary(expenses){
  let total = calculateTotal(expenses);
  let foodTotal = calculateCategoryTotal(expenses, "food");
  let transportTotal = calculateCategoryTotal(expenses, "transport");
  let largestExpense = findLargestExpense(expenses);
  
  return {
    total: total,
    foodTotal: foodTotal,
    transportTotal: transportTotal,
    largestExpense: largestExpense
    
    
    
    
    
  }
  
  
  
  
  
  
  
}


const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];


console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));