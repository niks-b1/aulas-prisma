let relogio = document.getElementById("relogio")
let cronometro = document.getElementById("cronometro")
let iniciar = document.getElementById("iniciar")
let parar = document.getElementById("parar")
let zerar = document.getElementById("zerar")

function atualizarrelogio(){
    let horario = new Date();
    let hora = horario.getHours().toString().padStart(2, "0")
    let minuto = horario.getMinutes().toString().padStart(2, "0")
    let segundo = horario.getSeconds().toString().padStart(2, "0")

    let texto = hora + ":" + minuto + ":" + segundo
    relogio.innerText = texto
}

atualizarrelogio()
setInterval(atualizarrelogio, 1000)

let tempo_cronometro = [0, 0, 0]
function atualizarcronometro(){
    tempo_cronometro[2]++;

    if(tempo_cronometro[2] == 60){
        tempo_cronometro[2] = 0
        tempo_cronometro[1]++
    }

    if(tempo_cronometro[1] == 60){
        tempo_cronometro[1] = 0
        tempo_cronometro[0]++
    }

    cronometro.innerText = tempo_cronometro[0].toString().padStart(2, "0") + ":" + tempo_cronometro[1].toString().padStart(2, "0")
     + ":" + tempo_cronometro[2].toString().padStart(2, "0")
}

let ativo = false
let id
parar.style.display = "none"
zerar.style.display = "none"

iniciar.addEventListener("click", () => {
    if(ativo == false){
        id = setInterval(atualizarcronometro, 1000)
    }
    ativo = true
    parar.style.display = "inline"
    zerar.style.display = "inline"
    iniciar.style.display = "none"
})

parar.addEventListener("click", () => {
    clearInterval(id)
    ativo = false
    iniciar.innerText = "continuar"
    parar.style.display = "none"
    iniciar.style.display = "inline"
})

zerar.addEventListener("click", () => {
    tempo_cronometro = [0, 0, 0]
    cronometro.innerText = "00:00:00"
    iniciar.innerText = "iniciar"
    if(ativo == false){
        zerar.style.display = "none"
    }
})

let temporizador = document.getElementById("temporizador")
let tempo = document.getElementById("tempo")
let botao = document.getElementById("botao")

let tempo_temporizador = [0, 0, 0]
function atualizartemporizador(){
    tempo_temporizador[2]--

    if(tempo_temporizador[0] == 0 && tempo_temporizador[1] == 0 && tempo_temporizador[2] == 0){
        clearInterval(id_temporizador)
        alert("acabou o tempo")
        ativo_temporizador = false
    }
    
    if(tempo_temporizador[2] == -1){
        tempo_temporizador[2] = 59 
        tempo_temporizador[1] --
    }
    if(tempo_temporizador[1] == -1){
        tempo_temporizador[1] = 59 
        tempo_temporizador[0] --
    }
    temporizador.innerText = tempo_temporizador[0].toString().padStart(2, "0") + ":" + tempo_temporizador[1].toString().padStart(2, "0")
     + ":" + tempo_temporizador[2].toString().padStart(2, "0")
}

let ativo_temporizador = false
let id_temporizador
botao.addEventListener("click", () => {
    if(ativo_temporizador == false){
        if(tempo_temporizador[0] == 0 && tempo_temporizador[1] == 0 && tempo_temporizador[2] == 0){
            tempo_temporizador = [0, tempo.value, 0]
        }
        id_temporizador = setInterval(atualizartemporizador, 1000)
        ativo_temporizador = true
        botao.innerText = "pausar"
    }
    else{
        clearInterval(id_temporizador)
        ativo_temporizador = false
        botao.innerText = "iniciar"
    }
})