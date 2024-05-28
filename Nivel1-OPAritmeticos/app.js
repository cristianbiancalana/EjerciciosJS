const $numero1 = document.getElementById("numero1");
const $numero2 = document.getElementById("numero2");
const $button = document.getElementById("sumar");
const $p = document.getElementById("resultado");

$button.addEventListener("click", () => {
    if (!isNaN($numero1) && !isNaN($numero2)) {
        $resultado = $numero1 + $numero2;
        $p.innerHTML = `La suma es: ${$resultado}`;
    } else {
        alert("Ingresaste una letra o simbolo");
    }
})