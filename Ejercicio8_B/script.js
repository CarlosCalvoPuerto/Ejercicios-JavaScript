
/** Definir variables */
var ladoCuadrado, area, perimetro;

/** Pedir datos al usuario */
ladoCuadrado = parseInt(prompt('INGRESE EL VALOR DEL LADO DEL CUADRADO...'));

/** Calculo */
area = Math.pow(ladoCuadrado,2);    // Area = Lado^2 == Area = Lado*Lado
perimetro = ladoCuadrado*4;     // Perimetro = Lado*4 == Perimetro = Lado+Lado+Lado+Lado

/** Mostrar resultado */
document.write('Si el lado del cuadrado es de '+ladoCuadrado+', su área tendrá el valor '+area+' y su perímetro será '+perimetro+'.');