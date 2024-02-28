let arrayNomes = [];
let arrayNotas = [];
let condition = true
let contador = 0


while (condition){
    let nome = prompt("Qual o nome do " + (contador + 1) + "º aluno")
    let nota = prompt("Digite a nota do aluno")

    arrayNomes[contador] = nome
    arrayNotas[contador] = nota
    contador++


    let continuar = Number(prompt("Se deseja adicionar mais algum aluno, tecle 1"))
    
    if (continuar != 1) {
        condition = false
    }
    
}

for (let a = 0; a < arrayNomes.length; a++) {
    console.log("Nota dos alunos ----" + arrayNomes[a] + " - " + arrayNotas[a])
}

somaDasNotas = 0
for (let i = 0; i < array.length; i++) {
  somaDasNotas += arrayNomes[i]    
}

let media = somaDasNotas / alunos.length

console.log("A soma das notas é " + somaDasNotas)
console.log("A média geral da turma foi " + media)
