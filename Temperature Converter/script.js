function celsiusToFahrenheit(celcius){
  let farenheit = (celcius*1.8) + 32;
  return farenheit;
}

function fahrenheitToCelsius(farenheit){
  let celcius = (farenheit - 32) / 1.8;
  return celcius;
}

function formatTemperature(value, unit){
  return `${value} ${unit}`;
}


const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, 'F'));
const celsius = fahrenheitToCelsius(68);
console.log(formatTemperature(celsius, 'C'));
const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, 'F'));
const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, 'C'));