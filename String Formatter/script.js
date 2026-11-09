function cleanText(text){
  let newText = text.trim();
  return newText;
};

function capitalize(text){
  let arr0 = text.split("");
  let arr1 = [];
  arr1[0] = arr0[0].toUpperCase();
  for (let i = 1; i < arr0.length; i++){
      arr1[i] = arr0[i].toLowerCase();
  }
  
  let newText = arr1.join("");
  return newText;
  
}


function formatDisplayName(firstName, lastName){
  let newFirstName0 = cleanText(firstName);
  let newFirstName1 = capitalize(newFirstName0);
   let newLastName0 = cleanText(lastName);
  let newLastName1 = capitalize(newLastName0);
  
  return `${newFirstName1} ${newLastName1}`;
  
}



console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));