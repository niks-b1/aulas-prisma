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

    cronometro.innerText = tempo_cronometro[0].toString().padStart(2, "0") + ":" + tempo_cronometro[1].toString().padStart(2, "0") + ":" + tempo_cronometro[2].toString().padStart(2, "0")
}

setInterval(atualizarcronometro, 1000)