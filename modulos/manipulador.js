export function inverterstring(texto){
    let invertido = ""
    for(let i = texto.length - 1; i >= 0; i--){
        invertido += texto[i]
    }
    return invertido
}

export function contarcaracteres(nome){
    return nome.length
}