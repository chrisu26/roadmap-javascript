function createGreeting(firstName, lastName, timeOfDay){
  
  return `${getGreeting(timeOfDay)}${formatName(firstName, lastName)}`;
  
  
  
};

function formatName(first0, last0){
  return `${first0} ${last0}`;
};

function getGreeting(timeDay0){
  if(timeDay0 === `morning`){
    return `Good morning, `;
  }
  if(timeDay0 === `afternoon`){
    return `Good afternoon, `;
  }
  if(timeDay0 === `evening`){
    return `Good evening, `;
  }
  
  return `ERROR! ONLY morning, afternoon and evening`;
  
}


console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));