function getDisplayName(user){
  let firstName = user.firstName;
  let lastName = user.lastName;
  
  return `${firstName} ${lastName}`;
  
}

function getLocation(user){
  
  let city = user.address.city;
  let country = user.address.country;
  
  return `${city} ${country}`;
  
}

function getContactSummary(user){
  let email = user.email;
  let phone = user.phone;
  
  return {
      
      email: email,
      phone: phone
    
    
  }
  
  
}


function isAccountActive(user){
  
  if (user.account.status === "active"){
    return true;
  }
  
  return false;
  
}


function createProfileSummary(user){
  
  let displayName = getDisplayName(user);
  let location = getLocation(user);
  let contact = getContactSummary(user);
  let active = isAccountActive(user);
  let plan = user.account.plan;
  
  return {
    displayName : displayName,
    location : location,
    contact : contact,
    active : active,
    plan : plan
  }

};

const user = {
  id: 42,
  firstName: 'Ava',
  lastName: 'Stone',
  email: 'ava@example.com',
  phone: null,
  address: {
    city: 'London',
    country: 'UK',
  },
  account: {
    status: 'active',
    plan: 'pro',
  },
};
console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));