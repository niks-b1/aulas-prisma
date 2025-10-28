let frutas = ["banana", "laranja", "maça", "uva", "pera"]
for(let contador = 0;contador <5;contador++){
console.log(frutas[contador])
}

let numeros = [1, 5, 81, 1, 2]
let maior = numeros[0]
for(let contador = 0;contador <numeros.length;contador++){
if(numeros[contador]>maior){
    maior = numeros[contador]
}
}
console.log(maior)