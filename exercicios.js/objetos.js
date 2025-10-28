let pessoa = {
    nome: "nikolas", idade: 17, profissao: "estudande"
}
console.log(pessoa)
console.log(pessoa.idade)

let produtos = [
    {nome: "arroz", preco: 10},
    {nome: "cafe", preco: 25},
    {nome: "ovo", preco: 20}
]
let maiscaro = produtos[0].preco
let mais = produtos[0]
for(let contador = 0;contador <3;contador++){
if(produtos[contador].preco>maiscaro){
maiscaro = produtos[contador].preco
mais = produtos[contador]
}}
console.log(mais)