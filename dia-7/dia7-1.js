let condition = true

let quantHomens = 0
let maiorNotaH = 0
let MulherAcimaDe7 = 0
let alunos = 0

while (condition) {
let nota = Number(prompt("Insira sua Nota"))
let sexo = prompt("Insira seu sexo. (M/F)")

    if (sexo == "F" && nota > 7) {
        MulherAcimaDe7++
    }
    if (sexo == "M" && nota > maiorNotaH) {
        maiorNotaH = nota
    }

    if (sexo == "M") {
        quantHomens++   
    }
    alunos++

    let conti = prompt("Digite 1 para inserir outra nota e 2 para parar")

    if (conti == "2") {
        condition = false
    } else{
        condition = true
    }
}

console.log(quantHomens + " Homens enviaram as notas")
console.log(MulherAcimaDe7 + " Mulheres tiveram nota acima de 7")
console.log(maiorNotaH + "Foi a maior nota entre os homens do grupo ")