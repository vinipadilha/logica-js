let nome = prompt("Insira seu nome abaixo.(Ex: João)")
let idade = prompt("Insira sua idade abaixo. (Ex: 18)")
let altura = prompt("Insira sua altura abaixo.(Ex: 1.85)")
let peso = prompt("Insira seu peso abaixo. (Ex: 68)")

console.log("Olá " + nome + ", você tem " + idade + "anos, nasceu em " + (2023 - idade) + ", tem " + altura + " de altura, pesa " + peso + "kg seu IMC é " + (peso / (altura * altura)) + "Kg/m2" )       