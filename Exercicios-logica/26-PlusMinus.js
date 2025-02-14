function plusMinus(arr) {
    // Write your code here
    let positivo = 0;
    let negativo = 0;
    let zero = 0;

    for (let index = 0; index < arr.length; index++) {
        
        if(arr[index] < 0){
            negativo++

        } else if(arr[index] > 0){
            positivo++

        } else {
            zero++
        }
        
    }

    let n = arr.length
    let resultadoPositivos = (positivo / n).toFixed(6)
    let resultadoNegativos = (negativo / n).toFixed(6)
    let resultadoZero = (zero / n).toFixed(6)

    return console.log(resultadoPositivos), console.log(resultadoNegativos), console.log(resultadoZero)
}


console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

//0.500000
// 0.333333
// 0.166667



