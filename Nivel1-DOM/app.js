const $div = document.getElementById("contenido");

$div.textContent = "Hola Mundo!"



// ----------------Ejercicio 2-----------------

const $changeButton = document.getElementById("cambiarColor");
const $divCuadrado = document.getElementById("cuadro");


$changeButton.addEventListener("click", () => {
    $divCuadrado.style.background = "blue";    
});