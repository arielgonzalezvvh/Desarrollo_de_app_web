/*
🧠 Ejercicio 1: Agregar elementos
Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos:
"pan", "leche" y "huevos".
Muestra el arreglo resultante  en html.
*/
//* referencia ul
const resultado = document.getElementById("resultado");
function agregarElementoCompra(){
     //valor input
    let elemento = document.getElementById("lista").value;
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}

// 🧠 Ejercicio 2: Eliminar último elemento
let carrito = [];

function mostrarlistadecompras() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; // Limpiar antes de mostrar
    for (let i = 0; i < carrito.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2"; // Añadir clase para estilo
        li.textContent = carrito[i];
        lista.appendChild(li);
    }
}

function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); // Guardar valor sin espacios
    if (valor === "") return;
    carrito.push(valor);
    input.value = "";
    input.focus(); // Enfocar el input
    mostrarlistadecompras();
}

function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop(); // Elimina el último elemento
        mostrarlistadecompras();
    }
}