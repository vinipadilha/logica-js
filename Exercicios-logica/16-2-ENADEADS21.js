let alturas = [];

function criaPessoa(num) {
    for (let index = 0; index < num; index++) {
        alturas.push(Number((Math.random() * (2.5 - 1.3) + 1.3).toFixed(2)));
    }
}

criaPessoa(1000);


alturas.sort((a, b) => a - b);

let soma = 0;

alturas.forEach(altura => soma += altura);

const media = (soma / alturas.length).toFixed(2);


let menorMedia = 0;
alturas.forEach(altura => {
    if (altura < Number(media)) { 
        menorMedia++;
    }
});


console.log(`Menor altura: ${alturas[0].toFixed(2)}`);
console.log(`Maior altura: ${alturas[alturas.length - 1].toFixed(2)}`);
console.log(`Média das alturas: ${media}`);
console.log(`Pessoas abaixo da média: ${menorMedia}`);
