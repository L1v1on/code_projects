const kelvin = 293; //Degrees in kelvin for codecademy project
let celsius = kelvin - 273; //Conversion of kelvin to celsius
let fahrenheit = Math.floor(celsius * (9/5) + 32); //Conversion of celsius to fahrenheit, rounded down
let newton = Math.floor(celsius * (33/100)); // Conversion of celsius to newton
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);