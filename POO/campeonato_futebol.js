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
        return this.vitoria *3 + this.empate
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

class Campeonato{
    times = []
    adicionartime(nome){
        let novotime = new Time(nome)
        this.times.push(novotime)
    }
    obtertabela(){
        return(times)
    }
}
let campeonato = new Campeonato()

let input = document.getElementById("nomedotime")
let botaotime = document.getElementById("adicionar")

function timenatabela(){
    let tabela = document.getElementById("tabela")
    let novalinha = document.createElement("tr")
    let timeatual = campeonato.times[campeonato.times.length -1]
    novalinha.innerHTML = 
        "<td>" + timeatual.nome + "</td>" +
        "<td>" + timeatual.calcularpontos() + "</td>" +
        "<td>" + timeatual.vitoria + "</td>" +
        "<td>" + timeatual.empate + "</td>" +
        "<td>" + timeatual.derrota + "</td>" +
        "<td>" + timeatual.golsmarcados + "</td>" +
        "<td>" + timeatual.golssofridos + "</td>" +
        "<td>" + timeatual.calcularsaldo() +"</td>"
    console.log(novalinha);
    tabela.appendChild(novalinha)
    
}
function atualizaOpcoes(){
    let selecionarcasa = document.getElementById("casa")
    let selecionarvisitante = document.getElementById("visitante")

}

botaotime.addEventListener("click", () => {
    campeonato.adicionartime(input.value)
    console.log(campeonato);
    timenatabela()
    atualizaOpcoes()
    input.value = ""
})


