class contabancaria{
    #saldo = 0
    #senha
    constructor(nome, senha){
        this.nome = nome
        this.#senha = senha
    }

    verificarsaldo(tentativa){
        if(tentativa == this.#senha){
            return this.#saldo
        }
        else{
            return "sua senha está incorreta"
        }
    }

    depositar(valor){
        this.#saldo += valor
        console.log("deposito bem sucedido")
    }

    sacar(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor
            console.log("saque bem sucedido")
        }
        else{
            console.log("não é possivel sacar um valor maior que seu saldo")
        }
    }
}

let