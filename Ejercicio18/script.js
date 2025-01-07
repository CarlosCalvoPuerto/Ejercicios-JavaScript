
/** Definir variables */
let nombre, nota;

/** Pedir datos al usuario */
nombre = prompt('INGRESE EL NOMBRE DEL ALUMNO...');
nota = parseInt(prompt('INGRESE LA NOTA DEL ALUMNO...'));


if (nota <= 10 && nota >= 9) {
    document.write('SOBRESALIENTE');
}
else if (nota < 9 && nota >= 7) {
    document.write('NOTABLE');
}
else if (nota < 7 && nota >= 5) {
    document.write('BIEN');
}
else if (nota < 5 && nota >= 0) {
    document.write('SUSPENSO');
}
else if (nota > 10) {
    document.write('ERROR: La nota no puede ser mayor que 10');
}
else if (nota < 0) {
    document.write('ERROR: La nota no puede ser menor que 0');
}
else {
    document.write('NO HAS INTRODUCIDO DATOS!');
}