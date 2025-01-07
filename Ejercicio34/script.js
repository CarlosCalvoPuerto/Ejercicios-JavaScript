/**
Escribir un programa que pida ingresar la coordenada de un punto en el plano, es decir
dos valores enteros x e y.
Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto. (1o
Cuadrante si x > 0 Y y > 0 , 2o Cuadrante: x < 0 Y y > 0, etc.)
 */


var x = parseInt(prompt('Introduzca la coordenada X...'));
var y = parseInt(prompt('Introduzca la coordenada Y...'));


if (x > 0) {
    if (y > 0) {
        document.write('Las coordenadas (',x,',',y,') pertenecen al 1<sup>er</sup> cuadrante');
    }
    else if (y < 0) {
        document.write('Las coordenadas (',x,',',y,') pertenecen al 4<sup>o</sup> cuadrante');
    }
    else if (y == 0) {
        document.write('Las coordenadas (',x,',',y,') se encuentran entre el 1<sup>er</sup> y el 4<sup>o</sup> cuadrante');
    }
}
else if (x < 0) {
    if (y > 0) {
        document.write('Las coordenadas (',x,',',y,') pertenecen al 2<sup>o</sup> cuadrante');
    }
    else if (y < 0) {
        document.write('Las coordenadas (',x,',',y,') pertenecen al 3<sup>er</sup> cuadrante');
    }
    else if (y == 0) {
        document.write('Las coordenadas (',x,',',y,') se encuentran entre el 2<sup>o</sup> y el 3<sup>er</sup> cuadrante');
    }
}
else if (x == 0) {
    if (y > 0) {
        document.write('Las coordenadas (',x,',',y,') se encuentran entre el 1<sup>er</sup> y el 2<sup>o</sup> cuadrante');
    }
    else if (y < 0) {
        document.write('Las coordenadas (',x,',',y,') se encuentran entre el 3<sup>er</sup> y el 4<sup>o</sup> cuadrante');
    }
    else if (y == 0) {
        document.write('Las coordenadas (',x,',',y,') se encuentran en el centro de los cuadrantes');
    }
}