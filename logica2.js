const prompt = require('prompt-sync')();
let grados;

while (true) {
    let respuesta = prompt("Escribe la temperatura en grados Celsius: ");
    grados = Number(respuesta); 
    if (isNaN(grados)) {
    console.log("Error. Escriba de nuevo el número");
    }
    else {
        break;
    }
}
    
let kelvin = grados + 273.15;
let fahrenheit = (grados * 1.8) + 32;
console.log(`Grados Kelvin: ${kelvin}`)
console.log(`Grados Fahrenheit: ${fahrenheit}`);





