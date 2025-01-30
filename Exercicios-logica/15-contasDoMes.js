let salario = 1200;
let gastos = {
    'Aluguel' : 800,
    'Luz' : 80,
    'Água' : 30,
    'Internet' : 90,
    'Cartão de Crédito': 1200
};

let totalGasto = 0

totalGasto = Object.values(gastos).reduce((a,b) => a + b);


console.log(`Salário: R$${salario}
Total de contas: R$${totalGasto}
Sobrou: R$ ${salario - totalGasto}`)



