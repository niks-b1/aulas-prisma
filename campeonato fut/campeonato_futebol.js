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

let tabela = document.getElementById("tabela")
let timeatual = campeonato.times[campeonato.times.length -1]
function atualizartabela(){
    tabela.innerHTML = "<tr><th>Time</th><th>Pontos</th><th>Vitória</th><th>Empates</th><th>Derrotas</th><th>Gols marcados</th><th>Gols sofridos</th><th>Saldo de gols</th></tr>"
    for(let contador = 0;contador < campeonato.times.length;contador ++){
        let novalinha = document.createElement("tr")
        novalinha.innerHTML = 
        "<td>" + campeonato.times[contador].nome + "</td>" +
        "<td>" + campeonato.times[contador].calcularpontos() + "</td>" +
        "<td>" + campeonato.times[contador].vitoria + "</td>" +
        "<td>" + campeonato.times[contador].empate + "</td>" +
        "<td>" + campeonato.times[contador].derrota + "</td>" +
        "<td>" + campeonato.times[contador].golsmarcados + "</td>" +
        "<td>" + campeonato.times[contador].golssofridos + "</td>" +
        "<td>" + campeonato.times[contador].calcularsaldo() +"</td>"
        tabela.appendChild(novalinha)
    }
}
function atualizaOpcoes(){
    let selecionartime = document.querySelectorAll(".selecionar")
    let novaopcao = document.createElement("option")
    let novaopcao2 = document.createElement("option")
    let opcaoatual = campeonato.times[campeonato.times.length -1]
    novaopcao.innerHTML = opcaoatual.nome
    novaopcao2.innerHTML = opcaoatual.nome
    selecionartime[0].appendChild(novaopcao)
    selecionartime[1].appendChild(novaopcao2)
}

let input = document.getElementById("nomedotime")
let botaotime = document.getElementById("adicionar")
let alertaTime = document.getElementById("alertatime")
botaotime.addEventListener("click", () => {
    if(input.value.length <= 2){
        alertaTime.innerText = "o nome do time deve conter pelo menos 3 caracteres"
        return
    }
    let alerta1 = campeonato.times.find(T => T.nome === input.value)
    if(alerta1 != null){
       alertaTime.innerText = "esse time já foi cadastrado"
       return
    }
    campeonato.adicionartime(input.value)
    console.log(campeonato);
    atualizartabela()
    atualizaOpcoes()
    input.value = ""
    alertaTime.innerText = ""
})

let alertaPartida = document.getElementById("alertapartida")
let registrar = document.getElementById("registrar")
let selectorC = document.getElementById("casa")
let selectorV = document.getElementById("visitante")
let inputC = document.getElementById("golsCasa")
let inputV = document.getElementById("golsVisitante")
registrar.addEventListener("click", () => {
    if(selectorC.value === selectorV.value){
        alertaPartida.innerText = "um time não pode jogar contra si"
        return
    }
    let timeCasa = campeonato.times.find(T => T.nome === selectorC.value)
    let timeVisitante = campeonato.times.find(T => T.nome === selectorV.value)
    
    let partida = new Partida(timeCasa, timeVisitante)
    partida.jogo(Number(inputC.value), Number(inputV.value))
    atualizartabela()
    alertaPartida.innerText = ""
    inputC.value = ""
    inputV.value = ""
})