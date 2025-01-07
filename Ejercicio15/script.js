
/** Definir variables */
var num1,num2,num3,num4,num5,multiplic,suma;

/** Pedir datos al usuario */
num1 = parseInt(prompt('INGRESE EL PRIMER NUMERO...'));
num2 = parseInt(prompt('INGRESE EL SEGUNDO NUMERO...'));
num3 = parseInt(prompt('INGRESE EL TERCER NUMERO...'));
num4 = parseInt(prompt('INGRESE EL CUARTO NUMERO...'));
num5 = parseInt(prompt('INGRESE EL QUINTO NUMERO...'));

/** Calculo */
suma = num1+num2+num3+num4+num5;
multiplic = num1*num2*num3*num4*num5;

/** Mostrar resultado */
document.write('La Suma entre '+num1+', '+num2+', '+num3+', '+num4+' y '+num5+' es: '+suma);
document.write('<br>')
document.write('La multiplicacion entre '+num1+', '+num2+', '+num3+', '+num4+' y '+num5+' es: '+multiplic);