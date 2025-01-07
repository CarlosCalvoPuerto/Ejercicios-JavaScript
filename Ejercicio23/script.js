
// Constantes de Precio
const BURGER_PRECIO = 2.30;
const TOMATE_PRECIO = 0.50;
const LECHUGA_PRECIO = 0.60;
const QUESO_PRECIO = 1.00
const CEBOLLA_PRECIO = 0.80;

// Constantes de Ingredientes
const TOMATE = "tomate";
const LECHUGA = "lechuga";
const QUESO = "queso";
const CEBOLLA = "cebolla";

// Variables para opciones y precio final
var opExtra, opComplemento;
var total = BURGER_PRECIO;

opExtra = prompt("Quiere añadirle algun ingrediente? (s/n)");

if ("s" == opExtra.toLowerCase()) {
    opComplemento = prompt("Indique que ingrediente quiere añadir? \
    \n-Tomate \
    \n-Lechuga \
    \n-Queso \
    \n-Cebolla");

    if (TOMATE == opComplemento.toLowerCase()) {
        total += TOMATE_PRECIO;
        document.write("El precio total de la hamburguesa con ",TOMATE, " es de: ",total.toFixed(2),"€");
    } 
    else if (LECHUGA == opComplemento.toLowerCase()) {
        total += LECHUGA_PRECIO;
        document.write("El precio total de la hamburguesa con ",LECHUGA, " es de: ",total.toFixed(2),"€");
    } 
    else if (QUESO == opComplemento.toLowerCase()) {
        total += QUESO_PRECIO;
        document.write("El precio total de la hamburguesa con ",QUESO, " es de: ",total.toFixed(2),"€");
    } 
    else if (CEBOLLA == opComplemento.toLowerCase()) {
        total += CEBOLLA_PRECIO;
        document.write("El precio total de la hamburguesa con ",CEBOLLA, " es de: ",total.toFixed(2),"€");
    } 
    else {
        document.write("No tenemos este ingrediente, lo sentimos.<br>");
        document.write("El precio total de la hamburguesa es de: ",total.toFixed(2),"€");
    }
}
else if ("n" == opExtra.toLowerCase()) {
    document.write("El precio total de la hamburguesa es de: ",total.toFixed(2),"€");
}
else {
    document.write("No ha introducido una opcion valida, por favor, recargue la pagina e intentelo de nuevo.");
}
