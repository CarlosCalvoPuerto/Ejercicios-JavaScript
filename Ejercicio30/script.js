/**
Esta noche no podemos conciliar el sueño, por lo que decidimos contar ovejas utilizando
el bucle “while”. Contemos ovejas desde 100 hasta cero, momento en que indicaremos:

Vamos a contar ovejas, quedan 100 por contar
Vamos a contar ovejas, quedan 99 por contar
Vamos a contar ovejas, quedan 98 por contar
.
.
.
.
“Hemos contado todas las ovejas, vamos a dormir ya”
 */



var i = 100;

while (i > 0) {
    document.write("Vamos a contar ovejas, quedan " ,i, " por contar<br>");
    i--;
}
document.write("Hemos contado todas las ovejas, vamos a dormir ya");
