/**
 */

var capitales = ["Sevilla","Cadiz","Huelva","Malaga","Cordoba","Granada"];

// 1 - Para el array de nombre 'capitales' escribe una instrucción que devuelva en pantalla la longitud del array.
document.write('Hay ',capitales.length,' capitales guardadas.<br>')

// 2 – Muestra en pantalla las posiciones primera, tercera, última
document.write(capitales[0],'<br>');
document.write(capitales[2],'<br>');
document.write(capitales[capitales.length-1],'<br>');
document.write('<br>');

// 3 - Añade en última posición la ciudad de Almeria. (Como resultado el array pasará a tener longitud 7, compruébelo en pantalla).
capitales.push('Almeria');
document.write('Hay ',capitales.length,' capitales guardadas.<br>')
document.write('<br>');

// 4 - Escribe por pantalla el elemento que ocupa la segunda posición.
document.write('Segunda Posicion: ',capitales[1],'<br>');
document.write('<br>');

// 5 - Sustituye el elemento que ocupa la segunda posición por la ciudad de Jaen.
capitales[1] = 'Jaen'
document.write('Segunda Posicion: ',capitales[1],'<br>');
document.write('<br>');

// 6- Muestre en pantalla de manera vertical todos los elementos del array en este momento
let i =0;
while(i<capitales.length) {
    document.write(capitales[i],'<br>');
    i++;
}