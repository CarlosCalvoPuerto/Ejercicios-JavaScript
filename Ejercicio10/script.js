/**
Escribe un programa que pida un número, a continuación pida otro número y escriba el resultado
de sumar estos dos números en pantalla.
 */

/** Declarar Variables de Funcion*/
let a, b;

// Pedir datos al usuario
a = parseInt(prompt('INGRESE EL VALOR 1...'));
b = parseInt(prompt('INGRESE EL VALOR 2...'));

// Suma
sum = a + b;

/** Mostrar resultado */
document.write('La suma de '+a+' + '+b +' es: '+sum+'.');