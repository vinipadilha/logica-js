let arrHotel = [];
let arrReserva = [];

//////////////////////////////////////////////////////////////////////////////////////////////////////

function CadastroHotel() {
    let idHotel = Number(prompt("Qual a id para cadastro do hotel?"))
    let idHotelExistente = arrHotel.some(hotel => hotel.id === idHotel);
    if (idHotelExistente) {
        console.log("Esse número de ID já está cadastrado.");
        return
    } 
    let nomeHotel = prompt("Qual nome do hotel?")
    let categoria = prompt("Qual categoria do hotel?")
    let endereco = prompt("Qual o endereço do hotel?")
    let telefone = Number(prompt("Qual o telefone do hotel?"))
    
    

    let hotel = {
        id: idHotel,
        nome: nomeHotel,
        categoria: categoria,
        endereco: endereco,
        telefone: telefone
    };

    arrHotel.push(hotel)
    console.log("Seu hotel foi cadastrado com sucesso!")
    
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function CadastroReserva() {
    let idReserva = prompt("Qual a id da sua reserva?")

    let idReservaExistente = arrReserva.some(reserva => reserva.idReserva === idReserva);
    if (idReservaExistente) {
        console.log("Esse número de ID já está cadastrado em outra reserva.");
        return
    } 

    let idHotelReserva = prompt("Qual a id do hotel?");
    let nomeResponsavel = prompt("Qual o nome do responsável da reserva?")
    let diaEntrada = prompt("Qual o dia de entrada?")
    let diaSaida = prompt("Qual o dia de saída?")
    if (diaEntrada > diaSaida) {
        console.log("O dia de entrada não pode ser maior que o dia de saída")
        return
        
    }

    let reserva = {
        idReserva: idReserva,
        idHotel: idHotelReserva,
        nomeResponsavel: nomeResponsavel,
        diaEntrada: diaEntrada,
        diaSaida: diaSaida
    };

    arrReserva.push(reserva);
    console.log("Sua reserva foi concluída com sucesso!")


}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ReservasHotel(idHotel) {
    //deve exibir no console todas as reservas feitas nesse hotel, tem que ter nome do hotel, nome do responsavel d reserva, dia de entrada e dia de saída
    //O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida

    let nomeHotel = arrHotel.find(hotel => hotel.id === idHotel)

    if (nomeHotel = false) {
        console.log("Hotel não foi encontrado.")
        return
    }

        arrReserva.forEach(reserva => {
            if (reserva.idHotel === idHotel) {
            console.log(`Nome do responsável: ${reserva.nomeResponsavel}`);
            console.log(`Dia de entrada: ${reserva.diaEntrada}`);
            console.log(`Dia de saída: ${reserva.diaSaida}`);
            console.log("=================================")
                
            }
        })


}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Reserva(idReserva) {
    // Encontra a reserva com base no idReserva
    let ReservaEncontrada = arrReserva.find(reserva => reserva.idReserva === idReserva);

    // Verifica se a reserva foi encontrada
    if (!ReservaEncontrada) {
        console.log("Reserva não encontrada.");
        return
    }

    // Encontra o hotel correspondente ao idHotel na reserva
    let hoteldaReserva = arrHotel.find(hotel => hotel.id === ReservaEncontrada.idHotel);

    // Exibe informações sobre a reserva e o hotel correspondente
    console.log("Nome do hotel:", hoteldaReserva.nome);
    console.log("Endereço:", hoteldaReserva.endereco);
    console.log("Dia de entrada:", ReservaEncontrada.diaEntrada);
    console.log("Dia de saída:", ReservaEncontrada.diaSaida);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ReservaPessoal(nomeResponsavel) {
    console.log(`Reservas de ${nomeResponsavel}:`);
    arrReserva.forEach(reserva => {
        if (reserva.nomeResponsavel === nomeResponsavel) {
            console.log(`Nome do hotel: ${arrHotel.find(hotel => hotel.id === reserva.idHotel).nome}`);
            console.log(`Dia de entrada: ${reserva.diaEntrada}`);
            console.log(`Dia de saída: ${reserva.diaSaida}`);
            console.log("===============================");
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function categoriaHotel(categoria) {
    console.log(`Hotéis na categoria ${categoria}:`);
    arrHotel.forEach(hotel => {
        if (hotel.categoria === categoria) {
            console.log(`${hotel.nome} - ${hotel.endereco}`);
        }
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function AtualizarTelefone(idHotel, telefone) {
    let hotel = arrHotel.find(hotel => hotel.id === idHotel);
    if (hotel) {
        hotel.telefone = telefone;
        console.log(`Telefone do hotel ${hotel.nome} atualizado para ${telefone}`);
    } else {
        console.log("Hotel não encontrado.");
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// crie um fluxo de funcionamento para o algoritmo, o usuario deve poder escolher quando encerrar o programa

let condicao = true

while (condicao) {
    let opcao = Number(prompt("Escolha oque deseja fazer, n/1 para cadastrar um hotel, n/2 para cadastrar uma reserva, n/3 para Reservas de um hotel, n/4 para uma reserva específica, n/5 para uma reserva pessoal, n/6 para hóteis na mesma categoria, n/7 para atualizar o telefone de um hotel e n/8 para encerrar o programa"))

    switch (opcao) {

        case 1:
            CadastroHotel()

            break;
        case 2:
            CadastroReserva()
                    
            break;
        case 3:
            let idHotel = prompt("Para verificar as reservas de um hotel digite aqui a id do hotel")
            ReservasHotel(idHotel)
            
            break;
        case 4:
            let idReserva = prompt("Qual a id da sua reserva?")
            Reserva(idReserva)
            
            break;
        case 5:
            let nomePessoa = prompt("Digite o nome da pessoa para verificar suas reservas:");
            ReservaPessoal(nomePessoa);
        
            break;
        case 6:
            let categoria = prompt("Digite a categoria de hotel para verificar:");
            categoriaHotel(categoria);
        
            break;
        case 7:
            let idHotelTelefone = prompt("Digite o ID do hotel para atualizar o telefone:");
            let novoTelefone = prompt("Digite o novo número de telefone:");
            AtualizarTelefone(idHotelTelefone, novoTelefone);
        
            break;
        case 8:
            condicao = false    
            break;
    
        default:
            console.log("Opção inválida")
            break;
    }
    
}


//REGRAS
//o id nao pode ser igual nenhum outro já existente ////////////////check
//O dia de entrada não pode ser maior que o de saída
//No cadastro de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir o cadastro em um hotel que nao seja no sistema







