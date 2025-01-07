
/** Definir variables */
let num1;

/** Pedir datos al usuario */
num1 = parseInt(prompt('INGRESE EL PRIMER NUMERO...'));

/** Condiciones */
if (num1 > 0 && num1 < 1000) {
    if (num1 >= 100) {
        document.write('El numero es de 3 cifras');
    } else if (num1 >= 10) {
        document.write('El numero es de 2 cifras');
    } else {
        document.write('El numero es de 1 cifra');
    }
} else {
    document.write('El numero no es valido');
}
