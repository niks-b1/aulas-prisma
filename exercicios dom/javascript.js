let aumentar = document.getElementById("aumentar")
let diminuir = document.getElementById("diminuir")
let texto = document.getElementById("titulo")

let contador = 0

aumentar.addEventListener("click", () => {
    contador++
    console.log(contador)
    texto.innerText = contador})
diminuir.addEventListener("click", () => {
    contador--
    console.log(contador)
    texto.innerText = contador})