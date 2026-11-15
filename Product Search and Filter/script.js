function filterByCategory(products, category) {
  
  let regex = new RegExp(`^${category}$`, "i");

  let searchResult = products.filter((product) => regex.test(product.category));
  return searchResult;  
  
}


function filterByMaxPrice(products, maxPrice){
  
  let searchResult = products.filter((product) => product.price <= maxPrice);
  return searchResult;
 
}


function getInStockProducts(products){
  
  let searchResult = products.filter((product) => product.inStock);
  
  return searchResult;
  
}


function findProductById(products, productId){
  
  let searchResult = products.filter((product) => product.id === productId);
  
  if (searchResult.length !== 1){
    return undefined;
  }
  
  return searchResult;
  
}

function searchProducts(products, searchText){
  
  let regex =  new RegExp(searchText, "i");
  
  let searchResult = products.filter((product => regex.test(product.name)));
  
  return searchResult;
  
  
  
}


const products = [
  { id: 1, name: 'Notebook', category: 'stationery', price: 10, inStock: true },
  { id: 2, name: 'Desk Lamp', category: 'home', price: 35, inStock: false },
  { id: 3, name: 'Pen Set', category: 'stationery', price: 6, inStock: true },
  {
    id: 4,
    name: 'Water Bottle',
    category: 'fitness',
    price: 18,
    inStock: true,
  },
];
console.log(filterByCategory(products, 'stationery').map((product) => product.name));
console.log(filterByMaxPrice(products, 20).map((product) => product.name));
console.log(findProductById(products, 3));
console.log(searchProducts(products, 'pen').map((product) => product.name));
console.log(getInStockProducts(products).map((product) => product.name));
console.log(findProductById(products, 99));

