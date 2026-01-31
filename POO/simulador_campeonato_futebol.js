class Time{
    vitoria = 0
    derrota = 0
    empate = 0
    golsmarcados = 0
    golssofridos = 0
    constructor(nome){
        this.nome = nome
    }
    calcularpontos(){
        return this.vitoria *3 + this.empate + " pontos"
    }
    calcularsaldo(){
        return this.golsmarcados - this.golssofridos
    }
    fimdejogo(golspro, golscontra){
        this.golsmarcados += golspro
        this.golssofridos += golscontra
        if(golspro > golscontra){
            this.vitoria++
        }
        else if(golspro == golscontra){
            this.empate++
        }
        else{
            this.derrota++
        }
    }
}

class Partida{
    constructor(casa, visitante){
        this.casa = casa
        this.visitante = visitante
    }
    jogo(golscasa, golsvisitante){
        this.casa.fimdejogo(golscasa, golsvisitante)
        this.visitante.fimdejogo(golsvisitante, golscasa)
    }
}