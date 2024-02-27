let array = [];
let num = parseInt(prompt("Insira um número inteiro e positivo"))
array[0] = num - 1
array[1] = num

for (let i = 2; i < 10; i++) {
    array[i] = array[i - 1] + array[i - 2] 
}

console.log("Sequencia - " + array)
