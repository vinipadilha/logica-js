var nome 
var salario

function info(){
    nome = prompt("Insira seu Nome. (Ex: João)")
    salario = Number(prompt("Insira seu salário em R$. (Ex: 1.850"))    
    calculo(nome, salario)  
}

// função para calcular aumento de salário
function calculo(nome, salario) {
var aumento

    if (salario <= 1500) {
        aumento = 0.2        
    } else if (salario <= 2000) {
        aumento = 0.15
    } else if (salario <= 3000) {
        aumento = 0.1
    }else{
        aumento = 0.05
    }
    
var salarioNovo = salario + (salario * aumento)


//EXIBINDO AUMENTOS
console.log(`${nome}, seu salário era de ${salario}, agora com o ajuste de ${aumento * 100}%, o seu novo salário é ${salarioNovo}`)

//Perguntando se deseja reiniciar o processo
let refazer = prompt("Deseja calcular novamente com novas informações? s/n")

if (refazer == "s") {
    info()
} else{
    console.log("Programa encerrado")
}
}

info()


