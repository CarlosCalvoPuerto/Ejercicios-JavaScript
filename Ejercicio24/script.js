
/**
 * Vamos a realizar un examen con una parte teórica y otra práctica.
 * El programa nos debe pedir
que insertemos ambas notas mediante un prompt. Para aprobar debemos tener como
mínimo un 5 en cada parte. El alumno que haya aprobado debe obtener su notaMedia  en pantalla y el que no haya superado la prueba será notificado mediante un alert.
 */


var notaTeor, notaPract, notaMedia;


notaTeor = parseFloat(prompt('INGRESE LA NOTA DE LA PARTE TEORICA DEL ALUMNO...'));
notaPract = parseFloat(prompt('INGRESE LA NOTA DE LA PARTE PRACTICA DEL ALUMNO...'));

notaMedia = (notaTeor+notaPract)/2;

if (notaPract>=5 && notaTeor>=5) {
    if (notaMedia <= 10 && notaMedia >= 9) {
        document.write('SOBRESALIENTE: ',notaMedia,'<br>');
        document.write('Parte Teorica: ',notaTeor,'<br>');
        document.write('Parte Practica: ',notaPract,'<br>');
    }
    else if (notaMedia < 9 && notaMedia >= 7) {
        document.write('NOTABLE: ',notaMedia,'<br>');
        document.write('Parte Teorica: ',notaTeor,'<br>');
        document.write('Parte Practica: ',notaPract,'<br>');
    }
    else if (notaMedia < 7 && notaMedia >= 5) {
        document.write('BIEN: ',notaMedia,'<br>');
        document.write('Parte Teorica: ',notaTeor,'<br>');
        document.write('Parte Practica: ',notaPract,'<br>');
    }
}
else if ((notaPract < 5 && notaPract >= 0) || (notaTeor < 5 && notaTeor >= 0)) {
    document.write('SUSPENSO','<br>');
    document.write('Parte Teorica: ',notaTeor,'<br>');
    document.write('Parte Practica: ',notaPract,'<br>');
}
else if (notaTeor > 10 || notaPract > 10) {
    document.write('ERROR: La nota no puede ser mayor que 10');
}
else if (notaTeor <0 || notaPract < 0) {
    document.write('ERROR: La nota no puede ser menor que 0');
}
else {
    document.write('NO HAS INTRODUCIDO DATOS!');
}
