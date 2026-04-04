class Humano{
    #nome = ""
    altura
    constructor(nome, altura){
        this.#nome = nome
        this.altura = altura
    }

    get nome(){

    }

    apresentar(){
        return ("Olá, meu nome é " + this.#nome);       
    }
}

class Homens extends Humano{
    mijarempe(){
        return "estou mijando em pé"
    }
}

let a = new Humano("Nikolas", 1.8)
console.log(a.apresentar());
