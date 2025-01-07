/**
 * Realizar la carga del nombre y la nota de un alumno. 
 * Mostrar un mensaje que aprobó si tiene una nota mayor o igual a 5. 
 * Si la nota es inferior, mostrar un mensaje que indique lo contrario.
 */



/** Definir variables */
let nombre, nota;

/** Pedir datos al usuario */
nombre = prompt('INGRESE EL NOMBRE DEL ALUMNO...');
nota = parseInt(prompt('INGRESE LA NOTA DEL ALUMNO...'));


if (nota > 10) {
    document.write('LA NOTA NO PUEDE SER MAYOR QUE 10!');
}
else if (nota == 10) {
    document.write(nombre,' tiene sobresaliente!');
}
else if (nota >= 5) {
    document.write(nombre,' esta aprobado');
}
else if (nota < 5) {
    document.write(nombre, ' esta suspenso');
}
else {
    document.write('NO HAS INTRODUCIDO DATOS!');
}