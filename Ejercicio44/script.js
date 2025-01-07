/**
Mediante una ventana emergente nos debe pedir un número entero, y posteriormente
impreso en pantalla me debe indicar si se trata de un número positivo, negativo o cero.
 */

var num1 =parseInt(prompt('Introduzca el numero...'));

if (num1 >0) {
    document.write('Positivo.<br>');
}
else if (num1 == 0) {
    document.write('Cero.');
}
else if (num1 < 0) {
    document.write('Negativo.');
}

