function diagonalDifference(arr) {
    // Write your code here
    let somaL = 0;
    let somaR = 0;

    for (let index = 0; index < arr.length; index++) {
        somaL += arr[index][index]
        
    }
    
    
}

console.log(diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]]
));



