let form = document.getElementById("form")
let input = document.getElementById("input")
let lista = document.getElementById("lista")

let linha = false
form.addEventListener("submit", (event) => {
    event.preventDefault()

    if(input !== null){
        let novoitem = document.createElement("li");
        novoitem.innerText = input.value
        novoitem.addEventListener("click", () => {
            if(linha == false){
                novoitem.style.textDecoration = "line-through"
                linha = true
            }
            else{
                novoitem.style.textDecoration = "none"
                linha = false
            }
        })
        lista.appendChild(novoitem)
        input.value = ""
    }
})