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