//método bubble sort

let lista = [7, 3, 0, 8, 2]

function ordenar(lista){
    for(let j = 0; j < lista.length; j++){
        for(let s = 0; s < lista. length; s++){
            if(j != s){
                if(lista[j] > lista[s]){
                    let auxiliar = lista[j]
                    lista[j] = lista[s]
                    lista[s] = auxiliar
                }
            }
        }
    }
    return lista
}

console.log(ordenar(lista))