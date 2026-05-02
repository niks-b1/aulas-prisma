const fs = require("fs");


const dados = fs.readFileSync("jogos.json", "utf-8");
const jogos = JSON.parse(dados);


const jogosEmEstoque = jogos.filter(jogo => jogo.emEstoque);


const soma = jogosEmEstoque.reduce((acc, jogo) => acc + jogo.preco, 0);
const media = soma / jogosEmEstoque.length;


console.log("Jogos em estoque:", jogosEmEstoque);
console.log("Preço médio:", media.toFixed(2));