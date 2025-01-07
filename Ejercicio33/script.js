/**
Realizar un programa que muestre 25 términos de la siguiente manera:
11
22
33
44
55
66
.
.
.
.
.
.
.
.
275
 */


var i = 1;
var num = i*11;


while (i <= 25) {
    document.write(num, " <br>");
    i++;
    num = i*11;
}