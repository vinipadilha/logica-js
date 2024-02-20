// == igual 
// != diferente 
// > maior que  
// < menor que 
// >= <= maior e menor ou igual 
// === é igual valor e tipo   
// !== é diferente o valor e o tipo 
// && significa 'e'
// || significa 'ou' 

let fome = prompt("Olá, você está com fome? (Responda com 'sim' ou 'não')")

let dinheiro = prompt("Você tem dinheiro? (Responda com 'sim' ou 'não')")

let rest = prompt("O restaurante está aberto? (Responda com 'sim' ou 'não')")



if (fome == "não" || dinheiro == "não" ){
    console.log("Hoje a janta será em casa")

}else if(fome == "sim" && dinheiro == "sim" && rest == 'não' ){
    console.log("Peça um delivery!")

}else if(fome == "sim" && dinheiro == "sim" && rest == "sim"){
    console.log("Hoje a janta será no seu restaurante preferido")

}