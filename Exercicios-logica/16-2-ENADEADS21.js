let alturas = [1.80, 1.67, 1.90, 2.03];

// deixar array em ordem crescente para descobrir maior e menor 
let soma = 0;

alturas.forEach((altura) => soma += altura);

const media = soma / alturas.length


let menorMedia = 0;
alturas.forEach((altura) => {
    if(altura < media){
        menorMedia ++
    } 
})


console.log(`Menor altura: ${alturas.sort()[0]}`)
console.log(`Maior altura: ${alturas.sort((a, b) => b - a)[0]}`)
console.log(`Média das alturas: ${media.toFixed(2)}`)
console.log(`Pessoas abaixo da média: ${menorMedia}`)

