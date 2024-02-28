let escolha = Number(prompt("Escolha 1 para abastecer com gasolina, 2 para abastecer com álcool, 3 para calibrar os pneus"))

switch (escolha) {
    case 1:
        let din = Number(prompt("Qual valor desejado"))
        console.log("O veículo foi abastecido com " + (din / 5) + "L de gasolina")
        break;
    case 2:
         let valor = Number(prompt("Qual valor desejado"))
        console.log("O veículo foi abastecido com " + (valor / 3) + "L de álcool")
        break;
    case 3:
        console.log("pneus calibrados com sucesso")
        break;
    default:
        break;
}