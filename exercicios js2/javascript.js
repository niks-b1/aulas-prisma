let titulo = document.getElementById("titulo")
let botao = document.getElementById("botao")
let corpo = document.getElementById("corpo")

botao.addEventListener("click", () => {
    titulo.innerText = "texto alterado por javasacript"
})

let azul = document.getElementById("azul")
    azul.addEventListener("click", () => {
        corpo.style.backgroundColor = "blue"
        titulo.style.color = "white"
    })
let verde = document.getElementById("verde")
    verde.addEventListener("click", () => {
        corpo.style.backgroundColor = "green"
        titulo.style.color = "white"
    })
let vermelho = document.getElementById("vermelho")
    vermelho.addEventListener("click", () => {
        corpo.style.backgroundColor = "red"
        titulo.style.color = "white"
    })
let amarelo = document.getElementById("amarelo")
amarelo.addEventListener("click", () => {
    corpo.style.backgroundColor = "rgba(206, 195, 40, 1)"
    titulo.style.color = "rgba(32, 32, 32, 1)"
})
    
let laranja = document.getElementById("laranja")
    laranja.addEventListener("click", () => {
        corpo.style.backgroundColor = "rgba(255, 102, 0, 1)"
        titulo.style.color = "white"
    })
let rosa = document.getElementById("rosa")
    rosa.addEventListener("click", () => {
        corpo.style.backgroundColor = "rgba(221, 88, 110, 1)"
        titulo.style.color = "white"
    })
let roxo = document.getElementById("roxo")
    roxo.addEventListener("click", () => {
        corpo.style.backgroundColor = "rgba(70, 7, 70, 1)"
        titulo.style.color = "white"
    })

let lista = document.getElementById("lista")
let aumentar = document.getElementById("aumentar")
let diminuir = document.getElementById("diminuir")

aumentar.addEventListener("click", () => {
    let item = document.createElement("li")
    item.innerText = "novo item"
    lista.appendChild(item)
})
diminuir.addEventListener("click", () => {})

let maiscontador = document.getElementById("aumcont")
let menoscontador = document.getElementById("dimcont")
let texto = document.getElementById("texto")

let contador = 0

maiscontador.addEventListener("click", () => {
    contador++
    console.log(contador)
    texto.innerText = contador})
menoscontador.addEventListener("click", () => {
    contador--
    console.log(contador)
    texto.innerText = contador})