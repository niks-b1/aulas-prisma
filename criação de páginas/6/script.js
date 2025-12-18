let formulario = document.querySelector("form")
let nome = document.querySelector("#nome")
let sobrenome = document.querySelector("#sobrenome")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let data = document.querySelector("#data")
let erro = document.querySelector("p")

function verificarnome(){
    if(nome.value.length < 3){
        nome.classList.add("erro")
        erro.innerText += "seu nome deve conter mais de três letras\n"
    }
}

function verificaremail(){
    if(email.value.includes("@") == false){
        email.classList.add("erro")
        erro.innerText += "seu email deve incluir @\n"
    }
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    erro.innerText = ""
    verificarnome()
    verificaremail()
})