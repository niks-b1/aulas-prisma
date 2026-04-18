// let usuario = {
//     nome: "matheus",
//     email: "m@m",
//     senha: "123"
// }

// console.log(usuario.email)

let texto = `{
    "usuario":{
        "nome": "davi",
        "email": "d@d",
        "senha": 123,
        "endereco":{
            "estado": "ES",
            "cidade": "Vitoria",
            "rua": "fulano de tal"
        },
        "pessoa com deficiencia": false,
        "conatato": ["27999999999", "27987654321"]
    }
}`

console.log(texto)


let objeto = JSON.parse(texto)

objeto.usuario.nome = "miguel"
objeto.usuario.email = "m@m"

texto = JSON.stringify(objeto)
console.log(texto)
