console.log("Vinculado correctamente...")

// Ejercicio 1: Agregar elementos
function agrElementos() {
    let compras = [];
    compras.push("pan", "leche", "huevos");
    alert(`Compras: ${compras.join(", ")}`);

    // Ejercicio 2: Quitar el último
    ultimo = compras.pop();
    alert(`Compras (pop): ${compras.join(", ")}`);
}

// Ejercicio 3: Agregar al inicio
function agrInicio() {
    let colores = ["rojo", "azul"];
    colores.unshift("amarillo");
    alert(`Colores: ${colores.join(", ")}`);
    
    // Ejercicio 4: Quitar el primero
    colores.shift();
    alert(`Colores: ${colores.join(", ")}`);
}

//Ejercicio 5: Combinación de métodos
function combMetodos() {
    let numeros = [10, 20, 30];
    numeros.push(40);
    let primero = numeros.shift();
    numeros.unshift(5);
    let ultimo = numeros.pop();
    alert(`Números: ${numeros.join(", ")}`);
}

// Ejercicio 6: Combinación de métodos
function agrElemInverso() {
    let orden = [];
    orden.unshift(1, 2, 3);
    alert(`Orden: ${orden.join(", ")}`);
}

// Ejercicio 7: Historial de mensajes
function historial() {
    let historial = []
}