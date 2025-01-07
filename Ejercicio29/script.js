/**
Escribir un script que pida al usuario una contraseña. Si coincide le devolverá el
mensaje "Acceso concedido" y si no coincide le devolverá el mensaje "Acceso Denegado".
La contraseña es: pasar
 */
const PASSWORD = "pasar";

var pasw = prompt("Intoduzca la contraseña...");

if (PASSWORD == pasw) {
    document.write("Acceso concedido");
}
else {
    document.write("Acceso Denegado");
}
