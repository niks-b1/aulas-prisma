function geraPartidas(g, htmlpai){

for(let posicaopais = 0; posicaopais < g.paises.length-1; posicaopais++){

    let nomepais = g.paises[0]
    for(let paiscontra = posicaopais+1; paiscontra < g.paises.length; paiscontra++){

      let htmlpartida = document.createElement("div")
      htmlpartida.classList.add("")
      htmlpartida.innerHTML = ``
      htmlpai.appendChild(htmlpartida)
    }
  }
}

function geraGrupoHTML(g){
    let htmlgrupo = document.createElement("div")
    
    htmlgrupo.classList.add("grupo")
    htmlgrupo.innerHTML = `<h2>Grupo ${g.grupo}</h2> <p> ${g.paises}</p>`

    return htmlgrupo
}

let listaGrupoHTML = document.querySelector("#grupos")

async function carregarDados() {
  const resposta = await fetch("./json.json");
  const dados = await resposta.json();

  let grupos = dados.grupos

  for(let posicaoGrupo = 0; posicaoGrupo < grupos.length; posicaoGrupo++){
    
    let htmlgrupo = geraGrupoHTML(grupos[posicaoGrupo])
    listaGrupoHTML.appendChild(htmlgrupo)
    
    geraPartidas(grupos[posicaoGrupo], htmlgrupo)
  }
}

carregarDados();