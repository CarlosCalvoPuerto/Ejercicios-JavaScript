
/** Definir variables */
let num1,num2;

/** Pedir datos al usuario */
num1 = parseInt(prompt('INGRESE EL PRIMER NUMERO...'));
num2 = parseInt(prompt('INGRESE EL SEGUNDO NUMERO...'));

/** Condiciones */
if (num1 > num2) {
    document.write(num1,' + ',num2,' = ',num1+num2,'<br>');
    document.write(num1,' - ',num2,' = ',num1-num2);
} else {
    document.write(num1,' * ',num2,' = ',num1*num2,'<br>');
    document.write(num1,' / ',num2,' = ',num1/num2);
}
