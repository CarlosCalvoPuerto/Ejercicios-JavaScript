/**
Realizar dos array, uno que incluya 5 colores y otro que incluya 7 deportes. Mostrarlos en
pantalla utilizando un bucle determinado “for”.
 */

var colores = ['rojo', 'azul', 'amarillo', 'verde', 'violeta'];
var deportes = ['football', 'baloncesto', 'tenis', 'airsoft', 'pin-pong', 'ajedrez', 'hockey']

var mayor;
if (colores.length>=deportes.length) {
    mayor= colores.length;
} else {
    mayor=deportes.length;
}

for(let i=0;i<mayor;i++) {

    if (i<colores.length) {
        document.write(colores[i],' - ');
    }
    else {
        document.write('______ - ');
    }

    if (i<deportes.length) {
        document.write(deportes[i]);
    }
    else {
        document.write('______');
    }
    document.write('<br>');

}
