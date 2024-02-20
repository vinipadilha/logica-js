const nome =  prompt("Olá, qual seu nome?")
const idade = Number(prompt("Qual sua idade?"))
const carta = prompt("Você possui carta de motorista? (sim/não)")
const carro = prompt("Você possui um carro? (sim/não)")

if( idade < 18 || carta == "não" ){
    console.log(nome + ", você não pode dirigir")
}else if(idade >= 18 && carta == "sim" && carro == "não"){
    console.log(nome + ", você pode dirigir mas não tem carro")
}else if(idade >= 18 && carta == "sim" && carro == "sim" ){
    console.log(nome + ", você será o motorista")
}
