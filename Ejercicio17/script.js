

/** Definir variables */
let dia, mes;

/** Pedir datos al usuario */
dia = prompt('INTRODUZCA DIA...')
mes = prompt('INTRODUZCA MES...')

if (mes == 12 && dia == 25) {
    document.write('Feliz Navidad!!!');
} else {
    document.write('Tenga un buen dia');
}