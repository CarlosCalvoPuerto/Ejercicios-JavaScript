

/** Definir variables */
let nombre,apellidos,edad,agnoMenos;

/** Pedir datos al usuario */
nombre = prompt('INGRESE SU NOMBRE...');
apellidos = prompt('INGRESE SU APELLIDO...');
edad = prompt('INGRESE SU EDAD...');
agnoMenos = prompt('INGRESE LA CANTIDAD DE AÑOS QUE LE GUSTARIA PERDER...');

/** Operaciones */
edad -= agnoMenos;
document.write('Eres '+nombre+' '+apellidos+' y te gustaría tener '+edad+' años');