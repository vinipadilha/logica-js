let alturas = [
    1.80, 2.04, 1.58, 1.72, 2.12, 
    1.65, 1.90, 1.75, 1.85, 1.95, 
    1.60, 1.78, 1.82, 2.00, 1.55, 
    1.70, 1.88, 1.67, 1.92, 2.10, 
    1.73, 1.59, 1.98, 1.64, 1.87
];
let maiorAltura = 0
let menorAltura = alturas[0]
let somaTotal = 0
let media = 0
let AbaixoMedia = []


for (let index = 0; index < alturas.length; index++) {
    somaTotal += alturas[index]

    if(alturas[index] > maiorAltura){
        maiorAltura = alturas[index]
    } 
    if(alturas[index] < menorAltura){
        menorAltura = alturas[index]
    } 

}

media = somaTotal / alturas.length;     

for (let index = 0; index < alturas.length; index++) {
    if (alturas[index] < media) {
        AbaixoMedia.push(" " + alturas[index]);
    }
}

console.log(`Maior altura: ${maiorAltura}`)
console.log(`Menor altura ${menorAltura}`)
console.log(`Média das alturas: ${media.toFixed(2)}`)
console.log(`Alturas abaixo da média: ${AbaixoMedia}`)
