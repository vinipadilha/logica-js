// array.indexOf(1) = 0 
// você pede para encontrar o número entre parenteses e ele devolve a posição

//array.push(5)
//vai inserir o número na ultima posição do array

//array.includes(3) = true/false
//verifica se o valor está no array

//array.splice(1,1) 
// (posição, quantos em diante) remove número do array


//array.forEach(numero =>{console.log(numero)})
//numero = variavel que representa 
// cada número ele excuta o código, como se fosse um loop de for

//array.filter(x => x > 2)
// x representa cada elemento do array
// retorna um array novo

// array.sort()
// altera para ordem crescente


let arrNomes = []
let arrSenhas =[]


function menu() {
    var desejo = Number(prompt("Oque deseja fazer? 1 para cadastro, 2 para fazer login, 3 para excluir um cadastro, 4 para encerrar o programa"))

    if (desejo !== 1 && desejo !== 2 && desejo !== 3 && desejo !== 4 ) {
        console.log("Opção inválida, digite novamente")
        desejo = Number(prompt("Oque deseja fazer? 1 para cadastro, 2 para fazer login, 3 para excluir um cadastro, 4 para encerrar o programa"))
        
    }
    return desejo

}



function cadastro() {
    
    
    var nome = prompt("Insira o nome")
    var senha = prompt('Insira a senha')

    arrNomes.push(nome)
    arrSenhas.push(senha)
    
}



function fazendoLogin(nome, senha) {
    let indice = arrNomes.indexOf(nome)
    if (indice !== -1 && arrSenhas[indice] == senha) {
        return true 
    } else {
        return false
    }
    
}

function excluir(nomeExc) {
    let indice = arrNomes.indexOf(nomeExc)
   
    if (indice !== -1) {
        arrNomes.splice(indice, 1)
        arrSenhas.splice(indice, 1)
        console.log("Cdastro excluído com sucesso")
    } else{
        console.log("Usuário não encontrado")
    }
    
}

let continuar = true

while (continuar) {
    let opcao = menu()

    switch (opcao) {
        case 1:
            cadastro()           
            break;

        case 2:
            let nome = prompt("Insira seu nome")
            let senha = prompt("Insira sua senha")
            let login = fazendoLogin(nome, senha)
            if(login){
                console.log("Login efetuado com sucesso")
            } else{
                console.log("Nome ou senha de login incorretos")
            }
            break;

        case 3:
            let nomeExc = prompt("Digite seu nome")
            excluir(nomeExc) 
            break;

        case 4:
            continuar = false
            break;

        default:
            console.log("Opção inválida")
            break;
    }
    
}






