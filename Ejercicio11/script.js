/**
Confeccionar un programa que nos pida el nombre y el domicilio. Mostrar posteriormente los
datos en pantalla de la siguiente manera:

Me llamo XXXXXX y vivo en la calle XXXXXXX
 */

/** Declarar Variables de Funcion*/
let nombre, domicilio;

// Pedir datos al usuario
nombre = prompt('INGRESE SU NOMBRE...');
domicilio = prompt('INGRESE SU DOMICILIO...');

/** Mostrar resultado */
document.write('Me llamo '+nombre+' y vivo en la calle '+domicilio);