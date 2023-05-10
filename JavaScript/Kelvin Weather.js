//this is the starting temperature
const kelvin = 293;

//Celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;

//Celsius to Fahrenheit conversion
let fahrenheit = celsius * (9 / 5) + 32;

//Converting to whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
