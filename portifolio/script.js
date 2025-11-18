console.log("testando conexão")

let nome = document.getElementById("nome")
let assunto = document.getElementById("assunto")
let descricao = document.getElementById("descricao")
let botao = document.getElementById("botao")

let api = "https://api.whatsapp.com/send?"
let telefone = "5527999069002"

botao.addEventListener("click", () => {

    let mensagem = "olá, meu nome é " + nome.value + ", gostaria de falar sobre " + assunto.value + "\n\n" + descricao.value
    mensagem = encodeURIComponent(mensagem)
    let link = api + "phone=" + telefone + "&text=" + mensagem
    window.open(link, "_blank")
})

