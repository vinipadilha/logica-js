let num1 = Number(prompt("Escolha seu primeiro número"))
let num2 = Number(prompt("Escolha seu segundo número"))
let operacao = Number(prompt("Escolha de 1 a 5 qual operação deseja fazer, 1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão"))


switch(operacao){
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case 4:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;

}