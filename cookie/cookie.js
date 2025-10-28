let cookie = document.getElementById("imagem")
let contador = document.getElementById("contador")
let numero = localStorage.getItem("numero")

contador.innerText = numero + " cookies"

cookie.addEventListener("click", () => {
    numero++
    localStorage.setItem("numero", numero)
    contador.innerText = numero + " cookies"
})