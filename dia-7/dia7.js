let nome = prompt("Insira seu nome")
let cpf = prompt("Insira seu cpf")
let saldo = 1000.00
let totalTransacoes = 0
let somaValoresInseridos = 0
let maiorValorInserido = 0
let continuar = false

do {
    const operacao = prompt("digite 1 para saque ou 2 para depósito")
     const valor = Number(prompt("digite o valor da transação"))

     if(valor < 0){
        console.log("Valor inválido")
     } else if(operacao == 1 && valor > saldo){
        console.log("Saldo insuficiente")
     } else if(operacao == 1){
        console.log("Olá " + nome + ", CPF:" + cpf + ", seu saldo atual é de R$" + saldo)
        saldo -= valor
        totalTransacoes++
        somaValoresInseridos += valor
        if(valor > maiorValorInserido ){
            maiorValorInserido = valor
        }
        console.log("Transação realizada com sucesso, seu saldo atual é de R$" + saldo)
        
     } else { 
        console.log("Olá " + nome + ", CPF:" + cpf + ", seu saldo atual é de R$" + saldo)
        saldo += valor 
        totalTransacoes++
        somaValoresInseridos += valor
        if(valor > maiorValorInserido ){
            maiorValorInserido = valor
        }
        console.log("Transação realizada com sucesso, seu saldo atual é de R$" + saldo)

     }

     const opcao = prompt("Digite 1 para continuar e 2 para parar")
     if(opcao === "1"){
        continuar = true
     } else if (opcao === "2"){
        continuar = false 
     } else {
        console.log("Opção inválida. Programa encerrado.")
        continuar = false
     }

} while (continuar == true);

console.log("Saldo final é igual a R$" + saldo)
console.log("Maior valor inserido foi de R$" + maiorValorInserido)
console.log("Média dos valores inseridos R$" + somaValoresInseridos / totalTransacoes)