function filtrarPares() {
    let numeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));
    let pares = [];

    
    for (let i = 0; i < cantidad; i++) {
        let valor = parseInt(prompt("Ingresa un número:"));
        numeros.push(valor);
    }

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }

    if (pares.length === 0) {
        alert("No hay números pares");
    } else {
        alert("Números pares: " + pares.join(", "));
    }
}
