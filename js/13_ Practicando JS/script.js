function numerosNaturales(){
    let n = parseInt(prompt("ingresa un número:"));
    let suma = 0
    let array = []
    for(let i = 1; i <=n; i++){
        suma += i;
        array.push(i);
    }
    alert(`La suma de los primeros números ${array.join("+")} es ${suma} `);

}

function numPares(){
    let array = []
    for(let i = 1; i <=200; i++){
        if (i % 2 === 0){
            array.push(i)
        }
    }
    alert(`Estos son los primeros 100 números pares: \n ${array.join("-")}  `);

}

function numImpares(){
    let array = []
    for(let i = 1; i <=200; i++){
        if (i % 2 !== 0){
            array.push(i)
        }
    }
    alert(`Estos son los primeros 100 números impares: \n ${array.join("-")}  `);

}


function sum5(){
    let suma = 0
    let array = []


    for(let i = 1; i <=5; i++){
        n = parseInt(prompt(`ingresa el  número ${i} `));
        array.push(i);
        suma += n;
    }
    alert(`La suma de los 5 números:${array.join("+")} \nEs: ${suma}  `);

}


function sumarNumeros(){
    let n = parseInt(prompt(`cuantos numero quires sumar `))
    let suma = 0
    let array = [];


    for(let i = 1; i <=n; i++){
        n = parseInt(prompt(`ingresa el número ${i} de ${n}`));
        array.push(n);
        suma += n;
    }
    alert(`La suma de los ${n} números:${array.join("+")} \nEs: ${suma}  `);

}