/**
 * De los tres números que me solicite el navegador mediante prompt, mostrar en pantalla
cuál es el mayor de ellos.
 */

var num1 =parseInt(prompt('Introduzca el 1er numero...'));
var num2 =parseInt(prompt('Introduzca el 2o numero...'));
var num3 =parseInt(prompt('Introduzca el 3er numero...'));



// Iguales Inferiores
if (num1 == num2 && num2 < num3) {
    // Numero 3
    document.write('El 3er numero es mayor: ',num3,', pero el 1er y el 2o numero son iguales: ',num1,' = ',num2);
}
else if (num1 == num3 && num1 < num2) {
    // Numero 2
    document.write('El 2o numero es mayor: ',num2,', pero el 1er y el 3er numero son iguales: ',num1,' = ',num3);
}
else if (num2 == num3 && num2 < num1) {
    // Numero 1
    document.write('El 1er numero es mayor: ',num1,', pero el 2o y el 3er numero son iguales: ',num2,' = ',num3);
}
// Iguales Superiores
else if (num1 == num2 && num2 > num3) {
    // Numero 1 y 2
    document.write('El 1er y el 2o numero son iguales y mayores: ',num1,' = ',num2);
}
else if (num1 == num3 && num1 > num2) {
    // Numero 1 y 3
    document.write('El 1er y el 3er numero son iguales y mayores: ',num1,' = ',num3);
}
else if (num2 == num3 && num2 >num1) {
    // Numero 2 y 3
    document.write('El 2o y el 3er numero son iguales y mayores: ',num2,' = ',num3);
}
// Desiguales
else if (num1 > num2 && num1 > num3) {
    // Numero 1
    document.write('El 1er numero es mayor: ',num1);
}
else if (num1 < num2 && num2 > num3) {
    // Numero 2
    document.write('El 2o numero es mayor: ',num2);
}
else if (num1 < num3 && num2 < num3) {
    // Numero 3
    document.write('El 3er numero es mayor: ',num3);
}
 