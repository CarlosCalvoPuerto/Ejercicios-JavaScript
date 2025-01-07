/**
 * Solicitar que se ingresen tres cifras mediante una ventana emergente. Mostrar un mensaje
en pantalla que indique si los 3 números son iguales, si se da el caso de que los 3 números
son desiguales o si por el contrario ha habido algún par en el que hayan coincidido.
 */


/** Definir variables */
let num1,num2,num3;

/** Pedir datos al usuario */
num1 = prompt('INGRESE EL PRIMER NUMERO...');
num2 = prompt('INGRESE EL SEGUNDO NUMERO...');
num3 = prompt('INGRESE EL TERCER NUMERO...');

/** Condiciones */
if (num1 == num2 && num1 == num3 && num2 == num3) {
    document.write('Todos los numeros son iguales: '+num1+' == '+num2+' == '+num3);
}
else if (num1 == num2) {
    document.write('El primer numero es igual que el segundo numero introducido: '+num1+' == '+num2+' =/= '+num3);
}
else if (num1 == num3) {
    document.write('El primer numero es igual que el tercer numero introducido: '+num1+' == '+num3+' =/= '+num2);
}
else if (num2 == num3) {
    document.write('El segundo numero es igual que el tercer numero introducido: '+num2+' == '+num3+' =/= '+num1);
}
else {
    document.write('Ninguno de los numeros son iguales: '+num1+' =/= '+num2+' =/= '+num3);
}