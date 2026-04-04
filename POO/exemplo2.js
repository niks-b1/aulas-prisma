class Mamifero{
    constructor(nome){
        this.nome = nome
    }

    mamar(){
        return "mamando da teta"
    }
}

class Humano{
    #nome = ""
    altura
    constructor(nome, dinheiro){
        this.#nome = nome
        this.dinheiro = dinheiro
    }

    get nome(){
        return this.#nome
    }

    set nome(novonome){

        if(novonome.length < 3){
            console.error("Não foi possivel alterar o nome")
        }else{
            this.#nome = novonome
        }
    }

    apresentar(){
        return ("Ola meu nome é: " + this.#nome)
    }

    pagarImposto(){
        console.log("Estou pagando imposto")
    }
}

class Brasileiro extends Humano{
    pagarImposto(){
        let imposto =  this.dinheiro/2
        this.dinheiro -= imposto
        console.log("Estou pagando " + imposto + ", saldo atual", this.dinheiro)
    }
}
class Estadunidense extends Humano{
    pagarImposto(){
        let imposto = this.dinheiro/10
        this.dinheiro -= imposto
        console.log("Estou pagando " + imposto + ", saldo atual", this.dinheiro)
    }
}
class Suico extends Humano{
    pagarImposto(){
        console.log("Não pago imposto, saldo atual " + this.dinheiro)
    }
}   




let a = new Brasileiro("Nikolas", 100)
let b = new Suico("Filipe", 100)
let c = new Estadunidense("Joao", 100)

a.pagarImposto()
b.pagarImposto()
c.pagarImposto()