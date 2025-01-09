function diagonalDifference(arr) {
    // Write your code here
    let diferenca = 0
    let somaA = 0
    let somaB = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if( arr[i] == i[j]){
                somaA = somaA + i[j]
            }
            
        }
        
    }
    return somaA

}

console.log(diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]]
));



