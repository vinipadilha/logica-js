dayOfProgrammer(1800)

function dayOfProgrammer(year) {
    if(year < 1700 || year > 2700){
        console.log("Digite um ano válido")
        
    }else if(year < 1918){
        if(year % 4 === 0){
            console.log(`12.09.${year}`)
        } else {
            console.log(`13.09.${year}`)
        }
    } else if(year > 1918){
        if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)  )){

        }

    }

}