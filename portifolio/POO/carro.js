class carro{
    velocidade = 0
    constructor(nome, ano){
        this.nome = nome
        this.ano = ano
    }
    acelerar(aceleracao){
        this.velocidade += aceleracao
    }
    freiar(frenagem){
        this.velocidade -= frenagem
    }
    tostring(){
        return this.nome + " " + this.ano + ", velocidade: " + this.velocidade
    }
}
let novo = new carro("fusca", 1989)

novo.acelerar(60)
novo.freiar(20)

console.log(novo.tostring())