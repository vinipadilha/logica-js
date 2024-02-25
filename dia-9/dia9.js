// CRIANDO VARIAVEIS 
let nome = prompt("Insira seu nome abaixo. (Ex: João)")
let idade = Number(prompt("Insira sua idade abaixo. (Ex: 21)"))
let peso = Number(prompt("Insira seu peso abaixo. (Ex: 72)"))
let altura = Number(prompt("Insira sua altura abaixo. (Ex: 1.72)"))
let profissao =  prompt("Insira sua profissão abaixo. (Ex: médico)")

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "m de altura e pesa " + peso + "kg.")

// VERIFICANDO IDADE
if (idade > 18 ){
        console.log("Está liberado para tomar umas geladas")
} else if(idade < 18){
        console.log("Sem gelada para você")
}

// IDADE FRACIONADA 
let idadeEmMeses = idade * 12
let idadeEmSemanas = idadeEmMeses * 4
let idadeEmDias = idade * 365

console.log("Sua idade em diferentes contagens: " + idade + " em anos, " + idadeEmMeses + "  em meses, " + idadeEmSemanas + " em semanas, " + idadeEmDias + " em dias.")


// CALCULANDO IMC
let IMC = Number(peso / (altura * altura))

if (IMC < 18.5){
    console.log("Seu IMC é de " + IMC + "kg/m2 e você se encontra na faixa de Magreza.")
} else if ( 18.5 < IMC < 24.9){
    console.log("Seu IMC é de " + IMC + "kg/m2 e você se encontra na faixa Normal.")
} else if (24.9 < IMC < 30) {
    console.log("Seu IMC é de " + IMC + "kg/m2 e você se encontra na faixa de sobrepeso.")
} else{
    console.log("Seu IMC é de " + IMC + "kg/m2 e você se encontra na faixa de Obesidade.")
}


// DESCOBRINDO O ANO QUE NASCEU
console.log("Você nasceu no ano de " + (2023 - idade ))

// DESCOBRINDO ANOS E IDADE
let anoDeNascimento = 2023 - idade
let anoVivido = anoDeNascimento
let idadeAtual = 0
let anoAtual = 2023



for (let anoVivido = anoDeNascimento; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}

//NOVOS DADOS 
do {
    
} while (condition);