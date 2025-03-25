console.log("Vinculado correctamente...")

// Evaluación de Edad
function edad() {
    let edad = parseInt(prompt("Ingresa tu edad: "));
    if (edad >= 18) {
        alert("Eres mayor de edad.");
    } else {
        alert("Eres menor de edad.");
    }
}

// Evaluación de Temperatura
function temperatura() {
    let celcius = parseFloat(prompt("Ingresa la temperatura en °C: "));
    if (celcius < 0) {
        alert("La temperatura es: " + celcius + "°C\nHace mucho frío.");
    } else {
        alert("La temperatura es: " + celcius + "°C\nLa temperatura es agradable.");
    }
}

// Verificación de Usuario y Contraseña
function verificarUsuario() {
    let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    let contraseña = prompt("Ingrese su contraseña: ");
    if (nombreUsuario == "usuario123" && contraseña == "secreto") {
        alert("Acceso concedido");
    }
    else {
        alert("Acceso denegado");
    }
}

// Determinar el Signo de un Número
function signoNumero() {
    let numero = prompt("Ingrese un número: ");
    if (numero > 0) {
        alert("El número " + numero + " es positivo.");
    } else if (numero < 0) {
        alert("El número " + numero + " es negativo.");
    } else {
        alert("El número es cero.");
    }
}

// Evaluación de Puntuación en un Juego
function puntuacion() {
    let puntos = prompt("Ingrese la puntuación obtenida: ");
    if (puntos >= 90) {
        alert("Excelente");
    } else if (puntos >= 70) {
        alert("Buen trabajo");
    } else {
        alert("Necesitas mejorar");
    }
}