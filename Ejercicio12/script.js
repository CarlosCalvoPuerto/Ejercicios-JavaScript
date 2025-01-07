
/** Definir variables */
var ladoCuadrado, area, perimetro;

/** Pedir datos al usuario */
ladoCuadrado = parseInt(prompt('INGRESE EL VALOR DEL LADO DEL CUADRADO...'));

/** Calculo */
perimetro = ladoCuadrado*4;     // Perimetro = Lado*4 == Perimetro = Lado+Lado+Lado+Lado

/** Mostrar resultado */
document.write('Si el lado del cuadrado es de '+ladoCuadrado+', su perímetro será '+perimetro+'.');