function birthdayCakeCandles(candles) {
    // Write your code here
    let sum = 0;
    let bigger = 0;

    for (let index = 0; index < candles.length; index++) {
        
        if (candles[index] > bigger) {
            bigger = candles[index]  
            
        } else if(candles[index - 1] == bigger) {
            sum++ 
        }
        
    }
    return sum;
}


console.log(birthdayCakeCandles([3, 2, 1, 3]));
console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
console.log(birthdayCakeCandles([3, 2, 1, 3]));