
function converterFuso(horarioBR){
    let horarioFR = horarioBR + 5

    if(horarioBR > 24){
        return console.log('você deve digitar um horário válido')
    } else if(horarioFR > 24){
        horarioFR = horarioFR - 24
        return console.log(`Horário Brasil: ${horarioBR}:${minutos} 
Horário França: ${horarioFR}:${minutos}`)
    } else {
        return console.log(`Horário Brasil: ${horarioBR}:${minutos} 
Horário França: ${horarioFR}:${minutos}`)
    }
}

let minutos = 28;
let horarioBR = 22;
let horarioFR = converterFuso(horarioBR);

