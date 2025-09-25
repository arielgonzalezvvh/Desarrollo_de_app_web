let contador1 = 3;
let contador2 = 3;
function sumarLikes() {
document.getElementById('contador-1').textContent = contador1;
contador1++;

alert("This page says\nNinja was liked")
}

function sumarLikes2() {
document.getElementById('contador-2').textContent = contador2;
contador2++;

alert("This page says\nNinja was liked")
}

function login(element) {
element.innerText = "Logout";
}

function hide(element) {
element.remove();
}