function soma(a, b) {
    return (a + b)
}
let resultado = soma(5, 10)
console.log(resultado)


function multiplicacao(a, b) {
    return (a * b)
}
let resultado2 = multiplicacao(5, 10)
console.log(resultado2)


function par(numero) {
    if(numero %2 == 1) {console.log("impar")}
    else{console.log("par")}
}
par(4)


function calculo(numero){
let fatorial = 1
for(let contador = 1; contador <= numero; contador++){
    fatorial = contador * fatorial
}
console.log(fatorial)}
calculo(5)


function conversao(celsius){
    return (celsius * 9/5) + 32;
}
console.log(conversao(0))


function media(notas){
    let soma = 0
    for(let contador = 0; contador < notas.length; contador++){
        soma += notas[contador]
    }
    return soma / notas.length
}console.log(media([6,7,8]))