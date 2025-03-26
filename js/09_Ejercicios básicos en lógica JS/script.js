function parImpar() {

let a = 5 /  2;  

let b = 20 % 3; 


let num = prompt("Ingrese valor");

if (num %2 == 0){
	alert("Numero Par")
}

else {

	alert("Numero Impar")
}

}

function imc(){
    let peso = parseFloat(prompt("Ingresa tu peso"));
    let altura = parseFloat(prompt("Ingresa tu altura"));
    altura = altura / 100;
    let imc = peso / (altura * altura);
    if (imc < 18.5){
        alert("Bajo peso");
    }
    else if (imc >= 18.5 && imc <=24.9) {
        alert("peso normal");
    } else{
        alert("sobrepeso")
    }
}



function promedio(){
    let nota1 = parseFloat(prompt("Ingresa tu primera nota:"));
    let nota2 = parseFloat(prompt("Ingresa tu segunda nota:"));
    let nota3 = parseFloat(prompt("Ingresa tu segunda nota:"));
    let promedio = (nota1 + nota3 + nota3) / 3;
    if (promedio < 4.0){
        alert("Aprobado"); 
    } else {
        alert("Reprobado");
    }
}