let botao = document.getElementById("botao")
let biografia = document.getElementById("sobre-mim")
let detalhes = false

botao.addEventListener("click", () => {
    if(detalhes == false){
        biografia.style.display = "inline"
        botao.innerText = "ocultar detalhes"
        detalhes = true
    }
    else{
        biografia.style.display = "none"
        botao.innerText = "mostrar detalhes"
        detalhes = false
    }
})