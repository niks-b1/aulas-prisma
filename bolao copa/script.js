async function carregarDados() {
  const resposta = await fetch("json.json");
  const dados = await resposta.json();
  console.log(dados);
}

carregarDados();