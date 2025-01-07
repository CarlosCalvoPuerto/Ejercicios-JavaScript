/**
 * Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la
tabla de multiplicar del mismo (los primeros 12 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.
 */

var num = parseInt(prompt('Introduce un numero del 1 al 10'));
while (num<1 || num>10){
    num = parseInt(prompt('El numero introducido esta fuera de rango\n \
        Por favor, introduce un numero del 1 al 10'));
}

for(let i = 1; i<=10;i++) {
    let result = i*num;
    document.write(result,'<br>');

}