// Ejercicio 1: Registro de Participantes
function registroParticipantes() {
let participantes = [];
let nombre = prompt("Ingrese un nombre (escriba 'salir' para terminar):");

while (nombre && nombre.toLowerCase() !== "salir") {
    participantes.push(nombre);
    nombre = prompt("Ingrese un nombre (escriba 'salir' para terminar):");
}

console.log("Total de participantes: " + participantes.length);
console.log("Lista: " + participantes.join(", "));

if (participantes.length > 5) {
    console.log(" ¡Hay muchos participantes! Excelente participación.");
}
}

//  Ejercicio 2: Simulador de Caja Registradora
function simuladorCaja() {
let productos = ["manzana", "pan", "leche"];

for (let i = 0; i < 5; i++) {
    if (productos.length > 0) {
    let vendido = productos.pop();
    console.log("Producto vendido: " + vendido);
    } else {
    console.log("Sin stock");
    }
}

let nuevoProducto = prompt("¿Desea reponer algún producto? (Escriba 'no' para omitir)");
while (nuevoProducto && nuevoProducto.toLowerCase() !== "no") {
    productos.push(nuevoProducto);
    nuevoProducto = prompt("¿Otro producto? (Escriba 'no' para terminar)");
}

console.log("Stock actualizado: " + productos.join(", "));
}
