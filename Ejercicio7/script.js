

/** Definir variables */
var precioUni, porcentIVA, importe;

/** Constantes */
const IVA = 21;

/** Inicializar variable */
precioUni = 50;

/** Calculo */
porcentIVA = precioUni*IVA/100;
importe =precioUni+porcentIVA

/** Mostrar resultado */
document.write('El importe total es: '+importe+'€');
