let json = require("./exemplo.json")
console.log(json)

const fs = require("fs")
fs.readFile("exemplo.json", "utf8", (erro, dados)=>{
    if(erro){
        console.log("não foi possível ler o arquivo")
        return        
    }
    objeto = JSON.parse(dados)

    console.log(objeto);
    
})