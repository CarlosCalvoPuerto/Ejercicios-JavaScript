/**
 * Realizar un programa que lea los lados de 4 triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales),
isósceles (dos lados iguales), o escaleno (ningún lado igual)
b) Cantidad de triángulos de cada tipo.
 */

const NUM_TRIANGULOS = 4;

var lado1 = [];
var lado2 = [];
var lado3 = [];

var equilatero = 0;
var isosceles = 0;
var escaleno = 0;

// Introducir lados de los triangulos
for (i = 0; i < NUM_TRIANGULOS; i++) {
    lado1[i] = parseInt(prompt('Introduzca el primer lado del triangulo ' + (i + 1) + '...'));
    lado2[i] = parseInt(prompt('Introduzca el segundo lado del triangulo ' + (i + 1) + '...'));
    lado3[i] = parseInt(prompt('Introduzca el tercer lado del triangulo ' + (i + 1) + '...'));

    // a) De cada uno de ellos, qué tipo de triángulo es: 
    document.write('--Triangulo ' + (i + 1) + '--.<br>');
    // equilátero (tres lados iguales)
    if (lado1[i] == lado2[i] && lado1[i] == lado3[i]) {
        document.write('El triangulo ' + (i + 1) + ' es equilátero.<br>');
        equilatero++;
    }
    // isósceles (dos lados iguales)
    else if (lado1[i] == lado2[i] || lado1[i] == lado3[i] || lado2[i] == lado3[i]) {
        document.write('El triangulo ' + (i + 1) + ' es isósceles.<br>');
        isosceles++;
    }
    // escaleno (ningún lado igual)
    else if (lado1[i] != lado2[i] || lado1[i] != lado3[i] || lado2[i] != lado3[i]) {
        document.write('El triangulo ' + (i + 1) + ' es escaleno.<br>');
        escaleno++;
    }
    document.write('----------------------------------------<br><br>');
}

// b) Cantidad de triángulos de cada tipo.
document.write('--Numero de Triangulos de Cada Tipo--.<br>');

if (equilatero > 1) {
    document.write('Hay ' + equilatero + ' triangulos equiláteros.<br>');
} else if (equilatero == 1) {
    document.write('Hay ' + equilatero + ' triangulo equilátero.<br>');
} else if (equilatero == 0) {
    document.write('No hay triangulos equiláteros.<br>');
}

if (isosceles > 1) {
    document.write('Hay ' + isosceles + ' triangulos isósceles.<br>');
} else if (isosceles == 1) {
    document.write('Hay ' + isosceles + ' triangulo isósceles.<br>');
} else if (isosceles == 0) {
    document.write('No hay triangulos isósceles.<br>');
}

if (escaleno > 1) {
    document.write('Hay ' + escaleno + ' triangulos escalenos.<br>');
} else if (escaleno == 1) {
    document.write('Hay ' + escaleno + ' triangulo escaleno.<br>');
} else if (escaleno == 0) {
    document.write('No hay triangulos escalenos.<br>');
}