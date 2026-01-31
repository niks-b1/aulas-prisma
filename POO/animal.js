class mamifero{
    amamentam = true
    constructor(nome, patas, som){
        this.nome = nome
        this.patas = patas
        this.som = som
    }
    fazsom(){
        console.log(this.som)
    }
}
let animais = [
    new mamifero("humano", 2, "olá"), 
    new mamifero("baleia", 0, "wooo"), 
    new mamifero("leão", 4, "roar")]
console.log(animais)

let homem = new mamifero("filipe", 2, "olá")
homem.fazsom()