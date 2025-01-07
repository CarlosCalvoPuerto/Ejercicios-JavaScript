/**
Mostrar los múltiplos de 8 hasta el valor 500. Deben aparecer en pantalla verticalmente.
 */


const MULTIPLO =8;
var i = 1;
var result;

result = i*MULTIPLO;

while (result <= 500) {
    document.write(result, " <br>");
    i++;
    result = i*MULTIPLO;
}
document.write(result, " <br>");
