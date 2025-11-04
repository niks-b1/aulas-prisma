import * as fs from "fs"
fs.readFile("./frase.txt", "utf-8", (erro, dados) => {
    if(erro) {
    console.log("ocorreu um erro ao ler seu arquivo", erro)
    return
    }
    let frase = dados.split(" ")
    console.log("o arquivo tem " + frase.length + " palavras")
})

fs.readFile("./entrada.txt", "utf-8", (erro, dados) => {
    if(erro) {
        console.log("ocorreu um erro ao ler seu arquivo", erro)
        return
    }
    let maiusculas = dados.toUpperCase()
    console.log(maiusculas)
    fs.writeFile("saida.txt", maiusculas, (erro) => {
        if(erro){
            console.log("erro na escrita de arquivo")
        }
    })
})

let data = new Date()
let linha = "\n" + "novo acesso:" + data
fs.appendFile("./log.txt", linha, (erro) => {
    if(erro) {
        console.log("ocorreu um erro ao ler seu arquivo")
        return
    }
    console.log(data)
})