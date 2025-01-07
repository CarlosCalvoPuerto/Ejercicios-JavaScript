/**
 */

const NUM_ALUMN_MORNG = 5;
const NUM_ALUMN_NOON = 6;
const NUM_ALUMN_NIGHT = 4;

var alumnMorning = [];
var alumnNoon = [];
var alumnNight = [];

var mediaMorning = 0;
var mediaNoon = 0;
var mediaNight = 0;

// Las edades de cada estudiante deben ingresarse por teclado.
for (i=0;i<NUM_ALUMN_MORNG;i++) {
    alumnMorning[i]= parseInt(prompt('Introduzca la edad del alumno de mañana '+(i+1)+'...'));
}
for (i=0;i<NUM_ALUMN_NOON;i++) {
    alumnNoon[i]= parseInt(prompt('Introduzca la edad del alumno de tarde '+(i+1)+'...'));
}
for (i=0;i<NUM_ALUMN_NIGHT;i++) {
    alumnNight[i]= parseInt(prompt('Introduzca la edad del alumno de noche '+(i+1)+'...'));
}

// a) Obtener el promedio de las edades de cada turno (tres promedios).
for (i=0;i<NUM_ALUMN_MORNG;i++) {
    mediaMorning += alumnMorning[i];
}
mediaMorning/=NUM_ALUMN_MORNG;
for (i=0;i<NUM_ALUMN_NOON;i++) {
    mediaNoon += alumnNoon[i];
}
mediaNoon/=NUM_ALUMN_NOON;
for (i=0;i<NUM_ALUMN_NIGHT;i++) {
    mediaNight += alumnNight[i];
}
mediaNight/=NUM_ALUMN_NIGHT;

// b) Imprimir dichos promedios (promedio de cada turno).
document.write('La media de edades de los alumnos de mañana es :',mediaMorning,'<br>');
document.write('La media de edades de los alumnos de tarde es: ',mediaNoon,'<br>');
document.write('La media de edades de los alumnos de noche es: ',mediaNight,'<br>');

// c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.
// Desiguales
if (mediaMorning > mediaNoon && mediaMorning > mediaNight) {
    // Numero 1
    document.write('El turno de mañana es mayor que el resto: ',mediaMorning);
}
else if (mediaMorning < mediaNoon && mediaNoon > mediaNight) {
    // Numero 2
    document.write('El turno de tarde es mayor que el resto: ',mediaNoon);
}
else if (mediaMorning < mediaNight && mediaNoon < mediaNight) {
    // Numero 3
    document.write('El turno de noche es mayor que el resto: ',mediaNight);
}
// Iguales
else if (mediaMorning == mediaNoon && mediaNoon > mediaNight) {
    // Numero 1 y 2
    document.write('Los turnos de mañana y tarde son mayor que el resto: ',mediaMorning,' = ',mediaNoon);
}
else if (mediaMorning == mediaNight && mediaMorning > mediaNoon) {
    // Numero 1 y 3
    document.write('Los turnos de mañana y noche son mayores que el resto: ',mediaMorning,' = ',mediaNight);
}
else if (mediaNoon == mediaNight && mediaNoon >mediaMorning) {
    // Numero 2 y 3
    document.write('Los turnos de tarde y noche son mayores que el resto: ',mediaNoon,' = ',mediaNight);
}
else if (mediaNoon == mediaNight && mediaNoon == mediaMorning) {
    // Numero 2 y 3
    document.write('Los turnos de mañana, tarde y noche son iguales ',mediaMorning,' = ',mediaNoon, ' = ',mediaNight);
}