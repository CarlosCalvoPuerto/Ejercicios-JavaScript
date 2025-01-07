/**
 * Usando un bucle while escribir un script que pida un numero y cree una lista en pantalla
de manera vertical con los números desde el 0 al valor tecleado.
 */
let i = 0;

var num = parseInt(prompt("Intoduzca un numero..."));

while (i < num){
    document.write(i,'<br>');
    i++;
}
document.write(i,'<br>');
