/**
Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de
multiplicar del mismo de la siguiente manera:

5
10
15
20
25
30
35
40
45
50
 */


var i = 1;
var num1 = parseInt(prompt("Escriba un numero..."))
var num2 = i*num1;

while (i <= 10) {
    document.write(num2, " <br>");
    i++;
    num2 = i*num1;
}