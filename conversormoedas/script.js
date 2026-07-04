let input = document.getElementById("input")
let select1 = document.getElementById("select1")
let select2 = document.getElementById("select2")
let converter = document.getElementById("button")
let resultado = document.getElementById("resultado")
let icon = document.getElementById("icon")

function Resultado(){
    resultado.innerText = (input.value * select1.value / select2.value).toFixed(2)
}


converter.addEventListener("click", () => {
    Resultado()
})

icon.addEventListener("click", () => {
    let posicao = select1.value
    select1.value = select2.value
    select2.value = posicao
    Resultado()
})