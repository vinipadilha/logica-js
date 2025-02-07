/*
function birthdayCakeCandles(candles) {
    // Write your code here
    let sum = 0;
    let bigger = 0;

    for (let index = 0; index < candles.length; index++) {
        if (candles[index] > bigger) {
            bigger = candles[index]
            
        }
        
    }

    for (let i = 0; i < candles.length; i++) {
        if (bigger == candles[i]) {
            sum++
            
        }
        
    }

    return sum;
}
*/


// console.log(birthdayCakeCandles([3, 2, 1, 3]));
// console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));


function birthdayCakeCandles(candles) {
    candles.sort((a, b) => a - b);
    let sum = 0;

    let bigger = candles[candles.length - 1]

    for (let index = 0; index < candles.length; index++) {
        
        if (candles[index] == bigger) {
            sum++
            
        }
        
    }
    return sum;
}



console.log(birthdayCakeCandles([3, 2, 1, 3]));
console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));


