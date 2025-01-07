/**
 */


var sueldo = parseFloat(prompt('Introduzca el sueldo...'));
var antiguedad = parseInt(prompt('Introduzca los años de antigüedad...'));

if (sueldo < 1500 && antiguedad >= 10) {
    let sueldoAnt = sueldo;
    sueldo += (sueldo*.20);

    document.write('Ha recibido un aumento del 20% <br>');
    document.write('Sueldo anterior: ',sueldoAnt,'<br>');
    document.write('Sueldo nuevo: ',sueldo,'<br>');
}
else if (sueldo < 1500 && antiguedad < 10) {
    let sueldoAnt = sueldo;
    sueldo += (sueldo*.05);

    document.write('Ha recibido un aumento del 5% <br>');
    document.write('Sueldo anterior: ',sueldoAnt,'<br>');
    document.write('Sueldo nuevo: ',sueldo,'<br>');
}
else if (sueldo >= 1500) {
    let sueldoAnt = sueldo;
    document.write('No ha recibido ningun aumento. <br>');
    document.write('Sueldo anterior: ',sueldoAnt,'<br>');
    document.write('Sueldo nuevo: ',sueldo,'<br>');
}