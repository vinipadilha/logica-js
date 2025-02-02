let alturas = [];
function criaPessoa (num){
    for(let index = 0; index < num; index += 1){
        alturas.push((Math.random() * (2.5 - 1.3) + 1.3).toFixed(2))
    }
}


criaPessoa(10)


// deixar array em ordem crescente para descobrir maior e menor 
let soma = 0;

alturas.forEach((altura) => soma += altura);

const media = (soma / alturas.length).toFixed(2)


let menorMedia = 0;
alturas.forEach((altura) => {
    if(altura < media){
        menorMedia ++
    } 
})


console.log(`Menor altura: ${(alturas.sort()[0]).toFixed(2)}`)
console.log(`Maior altura: ${(alturas.sort((a, b) => b - a)[0]).toFixed(2)}`)
console.log(`Média das alturas: ${media}`)
console.log(`Pessoas abaixo da média: ${menorMedia}`)

