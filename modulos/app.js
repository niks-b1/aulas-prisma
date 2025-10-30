import * as calculadora from "./calculadora.js"
import * as saudacao from "./saudacao.js"
import * as geometria from "./geometria.js"
import * as manipulador from "./manipulador.js"
import * as conversor from "./conversor.js"

console.log(calculadora.multiplicar(10, 5))
console.log(calculadora.dividir(10, 5))
console.log(calculadora.somar(10, 5))
console.log(calculadora.subtrair(10, 5))

console.log(saudacao.oi("danilo lindo"))
console.log(saudacao.tchau("danilo lindo"))

console.log(geometria.arearetangulo(8, 4))
console.log(geometria.perimetroretangulo(8, 4))
console.log(geometria.areacirculo(3))
console.log(geometria.perimetrocirculo(3))

console.log(manipulador.inverterstring("nikolas"))
console.log(manipulador.contarcaracteres("nikolas"))

console.log(conversor.celsiusparafahrenheit(25))
console.log(conversor.quilosparalibras(10))