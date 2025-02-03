let alturas = [1.80, 1.67, 1.90, 2.03];

// deixar array em ordem crescente para descobrir maior e menor 
console.log(`Menor altura: ${alturas.sort()[0]}`)
console.log(`Maior altura: ${alturas.sort((a, b) => b - a)[0]}`)
 
