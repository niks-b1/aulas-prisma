function trocartela(tela){
    let telas = document.querySelectorAll(".tela")
    
    for(let i = 1; i < telas.length; i++){
        telas[i].style.display = "none"
    }

    let tela = document.getElementById(tela)
    tela.style.display = "block"
}


class Usuario{
    constructor(nome, email, senha){
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    verificaLogin(emailtestado, senhatestada){
        if(this.email == emailtestado && this.senha == senhatestada){
            console.log("confirma login");
            return true
        }
        else{
            console.log("email ou senha incorretos");
            return false 
        }
    }
}

class Admin extends Usuario{
    cadastrarProdutos(){
        console.log("cadastrando produto");
        
    }
}

class Loja{
    usuarios = []
    produtos = []

    adcionarusuario(novousuario){
        this.usuarios.push(novousuario)
    }

    logar(emailtestado, senhatestada){
        for(let i = 0; i < this.usuarios.length; i++){
            let login = this.usuarios[i].verificaLogin(emailtestado, senhatestada)
            if(login == true){
                trocartela("telaLoja")
            }
        }
    }
}

let loja = new Loja

let cadnome = document.getElementById("cadNome")
let cademail = document.getElementById("cadEmail")
let cadsenha = document.getElementById("cadSenha")
let cadconfirmarsenha = document.getElementById("cadConfirmarSenha")
let cadbotao = document.getElementById("cadBotao")

cadbotao.addEventListener("click", () => {
    if(cadnome.value.length == 0){
        alert("não é possível cadastrar usuário sem nome")
        return
    }
    let novousuario = new Usuario(cadnome.value, cademail.value, cadsenha.value)

    loja.adcionarusuario(novousuario)
})

let loginemail = document.getElementById("loginEmail")
let loginsenha = document.getElementById("loginSenha")
let loginbotao = document.getElementById("loginBotao")

