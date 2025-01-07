/**

 */

const NUM_TRI = 3;
const SUP_MAYOR = 12;

var base_tri = [];
var alt_tri = [];
var super_tri = [];

var cont = 0;

for (let i = 0; i < NUM_TRI; i++) {
    // Insercion de datos
    base_tri[i] = parseInt(prompt('Introduce la base del triangulo ' + (i + 1)));
    alt_tri[i] = parseInt(prompt('Introduce la altura del triangulo ' + (i + 1)));

    // Calculo de superficie (base por altura partido por 2)
    super_tri[i] = base_tri[i] * alt_tri[i] / 2;
    if (super_tri[i] > SUP_MAYOR) {
        cont++;
    }
}

for (let i = 0; i < NUM_TRI; i++) {
    // Mostrar resultado por pantalla
    document.write('TRIÁNGULO ', (i + 1),'<br>');
    document.write('Base: ', base_tri[i],'<br>');
    document.write('Altura: ', alt_tri[i],'<br>');
    document.write('Superficie: ', super_tri[i],'<br><br>');
}
document.write('Cantidad de triángulos con superficie mayor a ', SUP_MAYOR, ': ', cont);