/**
 * Se debe desarrollar un programa en el cual se ingresen cuatro números, calcular e informar
en pantalla de la multiplicación de los dos primeros y la suma del tercero y el cuarto.
 */
/** Definir variables */
var num1,num2,num3,num4,multiplic,suma;

/** Pedir datos al usuario */
num1 = parseInt(prompt('INGRESE EL PRIMER NUMERO...'));
num2 = parseInt(prompt('INGRESE EL PRIMER NUMERO...'));
num3 = parseInt(prompt('INGRESE EL PRIMER NUMERO...'));
num4 = parseInt(prompt('INGRESE EL PRIMER NUMERO...'));

/** Calculo */
multiplic = num1*num2;
suma = num3+num4;

/** Mostrar resultado */
document.write('La multiplicacion entre '+num1+' y '+num2+' es: '+multiplic);
document.write('<br>')
document.write('La Suma entre '+num3+' y '+num4+' es: '+suma);