let arrayNomes = [];
let arraySenhas = [];

let contador = 0
let condition = true

while (condition) {

    let deseja = Number(prompt("Oque deseja fazer? Tecle 1 para cadastrar, 2 para fazer login, 3 para excluir um cadastro e 4 para encerrar o programa"))
switch (deseja) {
    case 1:
        arrayNomes[contador] = prompt("Insira seu nome")
        arraySenhas[contador] = prompt("Insira sua senha")
        contador++
        break;

    case 2:
    let nomeLogin = prompt("Qual o nome para login")
    let senhaLogin = prompt("Qual senha para cadastro")
    let login = false 

        for (let i = 0; i < arrayNomes.length; i++) {
            if (nomeLogin == arrayNomes[i] && senhaLogin == arraySenhas[i] ) {
                login = true
            } 
        }
        if (login) {
            console.log("Login feito com sucesso")
        } else{
            console.log("Nome ou senhas incorretos")
        }
        break;

    case 3:
        let nomeExc = prompt("Qual nome deseja excluir")
        let nomesAux = []
        let senhasAux = []
        let contadorAux = 0

        for (let a = 0; a < array.length; a++) {
            if (nomeExc == arrayNomes[a]) {
                console.log("Cadastro excluido")
            } else{
                nomesAux[contadorAux] = arrayNomes[a]
                senhasAux[contadorAux] = arraySenhas[a]
                contador++
                }
        } 
        arrayNomesnome = nomesAux  
        arraySenhas = senhasAux
        contador--
        break;
    case 4:
        condition = false
        break;
    default:
        console.log("Opção invalida, escolha outra opção")
        break;
}
}