let usuario = document.getElementById("usuario")
let senha = document.getElementById("senha")
let botao =document.getElementById("botao")

console.log(usuario, senha, botao);


botao.addEventListener("click", () => {
    console.log("clicou", usuario.value, senha.value);
    
    if (usuario.value === "admin" && senha.value == 999){
        window.location.href = "admin.html"
        
    }
    if (usuario.value === "aluno" && senha.value == 123){
        window.location.href = "aluno.html"
        
    }
})