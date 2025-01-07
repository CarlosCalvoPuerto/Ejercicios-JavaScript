/**
Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los
últimos 5 valores ingresados.
 */

const NUM_VAL = 10;

var numeros = [];

var suma = 0;

// Introducir valores
for (i = 0; i < NUM_VAL; i++) {
    numeros[i] = parseInt(prompt( (i + 1) + '- Introduzca un numero...'));
}

// Mostrar los 5 ultimos valores
for (i = 5; i < NUM_VAL; i++) {
    suma += numeros[i]
}
document.write(suma,'<br>');