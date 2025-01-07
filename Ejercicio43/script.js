/**
 * Pedir el ingreso de 3 números y si son todos iguales, realizar la suma de los 2 primeros
y dicha suma se multiplicará por el tercero. Si no son iguales, se mostrará en pantalla
tal circunstancia.
 */

var num1 =parseInt(prompt('Introduzca el 1er numero...'));
var num2 =parseInt(prompt('Introduzca el 2o numero...'));
var num3 =parseInt(prompt('Introduzca el 3er numero...'));

if (num1 == num2 && num1 == num3) {
    document.write('Los 3 numeros son iguales.<br>');
    let suma = num1 + num2;
    document.write('La suma de los 2 primeros numeros es: ',suma,'<br>');
    let multi = suma * num3;
    document.write('La multiplicacion entre el 3er numero y la suma de los 2 primeros es: ',multi,'<br>');
}
else {
    document.write('No todos los numeros son iguales.');
}

