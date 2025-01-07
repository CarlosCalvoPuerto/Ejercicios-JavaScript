/**
 * Confeccionar una función que reciba dos números y muestre en la página los valores
comprendidos entre ellos de uno en uno. Cargar por teclado esos dos valores.
 */

var num1 =parseInt(prompt('Introduzca el 1er numero...'));
var num2 =parseInt(prompt('Introduzca el 2o numero...'));

if (num2 > num1) {
    for(let i = num1; i<=num2;i++) {
        document.write(i,'-');
    }
}
else if (num1 > num2) {
    for(let i = num1; i>=num2;i--) {
        document.write(i,'-');
    }
}
else {
    document.write("Valores no validos");
}