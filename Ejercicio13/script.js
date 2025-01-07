
/** Definir variables */
var precioUni, cant, precioTot;

/** Pedir datos al usuario */
precioUni = parseFloat(prompt('INGRESE EL PRECIO DEL ARTICULO...'));
cant = parseInt(prompt('INGRESE LA CANTIDAD DEL ARTICULO...'));

/** Calculo */
precioTot = precioUni*cant;     // Perimetro = Lado*4 == Perimetro = Lado+Lado+Lado+Lado

/** Mostrar resultado */
document.write('El importe total de mi compra es de '+precioTot+'€');