let dados

async function readConfig(){
    let resposta = await fetch("config.json")
    dados = await resposta.json()
    
    atualizarsite()
    console.log(dados);  
}

function atualizarsite(){
    let nome = document.getElementById("nome")
    let email = document.querySelector("#email")
    let senha = document.querySelector("#senha")

    nome.innerText = dados.nome
    email.innerText = dados.email
    senha.innerText = dados.senha

    nome.style.color = dados.cor
    nome.style.fontSize = dados.tamanho
    
    console.log(nome, email, senha);
}

readConfig()