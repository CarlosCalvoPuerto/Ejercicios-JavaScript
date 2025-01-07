
var articulos=["lápiz", "bolígrafo", "rotulador", "marcador"];

// 1) Vamos a mostrar en pantalla la frase "El primer artículo es ________________ "
document.write("El primer artículo es <strong>",articulos[0],"</strong><br>");

// 2) Vamos a mostrar en pantalla la frase "El último elemento es _____________"
document.write("El último elemento es <strong>",articulos[articulos.length-1],"</strong><br>");

// 3) Vamos a agregar el elemento "portaminas" al inicio.
articulos.unshift("portaminas");

// 4) Después de agregar el elemento "portaminas", vamos a mostrar en pantalla la frase "Ahora el primer elemento es _______________"
document.write("Ahora el primer elemento es <strong>",articulos[0],"</strong><br>");

// 5) Agregamos el valor "carpetas" al final del "Array"
articulos.push("carpetas");

// 6) Mostramos en pantalla la frase: "En este momento el último elemento es _____________"
document.write("En este momento el último elemento es <strong>",articulos[articulos.length-1],"</strong><br>");

// 7) Vamos a mostrar un listado vertical con todos los valores existentes en este momento
document.write("----------------<br>");
for (let i = 0; i<articulos.length; i++){
    document.write(i+1,"- <strong>", articulos[i],"</strong><br>");
}
document.write("----------------<br>");

// 8) Vamos a borrar el primer elemento y mostraremos en pantalla la frase "Hemos procedido a borrar el primer elemento"
articulos.shift();
document.write("Hemos procedido a borrar el primer elemento<br>");

// 9) Volvemos a repetir el punto 7)
document.write("----------------<br>");
for (let i = 0; i<articulos.length; i++){
    document.write(i+1,"- <strong>", articulos[i],"</strong><br>");
}
document.write("----------------<br>");

// 10) Vamos a eliminar el último valor y lo indicaremos en pantalla: "Hemos eliminado el último elemento"
articulos.pop();
document.write("Hemos eliminado el último elemento<br>");

// 11) Volvemos a repetir el punto 7)
document.write("----------------<br>");
for (let i = 0; i<articulos.length; i++){
    document.write(i+1,"- <strong>", articulos[i],"</strong><br>");
}
document.write("----------------<br>");


