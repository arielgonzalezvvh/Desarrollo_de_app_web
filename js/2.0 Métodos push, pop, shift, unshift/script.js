
    //referencia ul 
    const resultado = document.getElementById("resultado");
    function agregarElementoCompra(){
    //Valor del input
    let elemento = document.getElementById("lista").Value;
    //Creat elemento HTML --> createElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--innerText--</li>
    //appendchild inserta valor hijo en padre
    // resultado(<ul>(item(<li></li>))</ul)
    resultado.appendChild(item);
}
