let array = [];
let arrayContrario = [];
let quant = Number(prompt("Quantos números você deseja inserir"))

for (let a = 0; a < quant; a++) {
    let number = Number(prompt("Insira o " + (a + 1) + "número"))
    array[a] = number
}

console.log("Array original " + array)

let contador = quant - 1
for(let a = 0; a < quant; a++ ){
    arrayContrario[a] = array[contador]
    contador--
}

console.log("Array Invertido " + arrayContrario) 