let botao = document.getElementById("botao")

botao.addEventListener("click", () => {
    let body = document.querySelector("body")
    body.classList.toggle("dark-mode")
})