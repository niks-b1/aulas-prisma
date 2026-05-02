function trocartela(nometela){
    let telas = document.querySelectorAll(".tela")
    console.log(telas);
    
    for(let i = 0; i < telas.length; i++){
        telas[i].style.display = "none"
    }
    
    let tela = document.getElementById(nometela)
    tela.style.display = "flex"
}

trocartela("telaLogin")

class Usuario{

    destino = "telaLoja"

    constructor(nome, email, senha){
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    verificaLogin(emailtestado, senhatestada){
        if(this.email == emailtestado && this.senha == senhatestada){
            console.log("confirma login");
            return this.destino
        }
        else{
            console.log("email ou senha incorretos");
            return false 
        }
    }
}

class Admin extends Usuario{

    destino = "telaAdmin"

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
            let destino = this.usuarios[i].verificaLogin(emailtestado, senhatestada)
            if(destino != false){
                trocartela(destino)
                return
            }
        }
    }
}

class Produto{
    constructor(nome, valor, categoria, imagem){
        this.nome = nome
        this.valor = valor
        this.categoria = categoria
        this.imagem = imagem
    }

    exibirProduto(){

        let produto = document.createElement("div")
        produto.classList.add("produto")

        produto.innerHTML = `<img class="fotoProduto" src="${this.imagem}" alt="foto ${this.nome}"> 
                            <h3 class="nomeProduto">${this.nome}</h3> 
                            <h4 class="categoriaProduto">${this.categoria}</h4> 
                            <h3 class="precoProduto">${this.valor}</h3>`
        
        let listaprodutos = document.getElementById("lista-de-produtos")
        listaprodutos.appendChild(produto)
    }

    
    exibirProdutoAdmin(){

    }
}

let loja = new Loja()
let admin = new Admin("Admin", "a@a", "admin")
loja.adcionarusuario(admin)

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

    if(cadsenha.value != cadconfirmarsenha.value){
        alert("As senhas devem ser iguais")
        return
    }

    let existe = loja.usuarios.find(user => user.email == cademail.value)
    if(existe != null){
        alert("email já está cadastrado")
        return
    }

    let novousuario = new Usuario(cadnome.value, cademail.value, cadsenha.value)

    loja.adcionarusuario(novousuario)

    cadnome.value = ""
    cademail.value = ""
    cadsenha.value = ""
    cadconfirmarsenha.value = ""
})

let loginemail = document.getElementById("loginEmail")
let loginsenha = document.getElementById("loginSenha")
let loginbotao = document.getElementById("loginBotao")

loginbotao.addEventListener("click", () => {
    if(loginemail.value == "" || loginsenha.value == ""){
        alert("É necessário preencher email e senha para fazer o login")
        return
    }

    loja.logar(loginemail.value, loginsenha.value)
})

let logar = document.getElementById("logar")
let cadastrar = document.getElementById("cadastrar")
let span = document.getElementById("span")
let p = document.getElementById("p")
let C = true

logar.style.display = "none"

span.addEventListener("click", () => {
    if(C == true){
        cadastrar.style.display = "none"
        logar.style.display = "flex"
        p.innerText = "novo usuário?"
        span.innerHTML = "Cadastre-se aqui"
        C = false
    }
    else if(C == false){
        cadastrar.style.display = "flex"
        logar.style.display = "none"
        p.innerText = "já tem uma conta?"
        span.innerHTML = "Fazer login"
        C = true
    }
})