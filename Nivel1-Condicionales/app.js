const $input = document.getElementById("edad");
const $button = document.getElementById("verificarEdad");
const $p = document.getElementById("mensaje");


$button.addEventListener("click", () => {
    const $edad = parseInt($input.value);
    console.log($edad);
    if ($edad >= 18) {
        $p.textContent = "Eres mayor de edad";
    } else {
        $p.textContent = "No eres mayor de edad";
    }
});