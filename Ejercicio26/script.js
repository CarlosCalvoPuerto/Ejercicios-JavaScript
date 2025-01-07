
/**
 * Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté
fuera de ese rango deberá volver a pedir el número. En el momento que escriba un valor
dentro de ese rango, finalizará el programa.
 */

let valor = parseInt(prompt('INGRESE UN NUMERO ENTRE 1 Y 5'));

while (valor > 5 || valor < 1){
    valor = parseInt(prompt('INGRESE UN NUMERO ENTRE 1 Y 5'));
}

document.write('Ha introducido un numero valido: ',valor,'<br>');
