//bucle while
// contar del 10 al 9

function buclewhile(){
    let count = 10;
    let array = [];
    while(count >= 1){
        array.push(count);
        count--;
    }
    alert(`los numeros son: ${array.join(" - ")}`);
    
}


function buclefor(){
    for ( let count = 10; count >= 1;  count--  ) {
        array.push(count)
        let array = [];
        alert(`los numeros son: ${array.join(" - ")}`);
    }
}

function buclefor() {
    let array = [];  // Declarar el array fuera del bucle
    for (let count = 10; count >= 1; count--) {
        array.push(count);  // Agregar números al array
    }
    alert(`Los números son: ${array.join(" - ")}`);  // Mostrar el array completo al final
}

