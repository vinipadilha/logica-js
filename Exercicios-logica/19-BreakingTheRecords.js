

function breakingRecords(scores) {
    // Write your code here
    let maxCount = 0;
    let minCount = 0;
    let minRecord = scores[0]
    let maxRecord = scores[0]

    for(let index = 1; index < scores.length; index += 1){

        if(scores[index] > maxRecord) {
            maxRecord = scores[index]
            maxCount++

        } else if(scores[index] < minRecord){
            minRecord = scores[index]
            minCount++
        } 

    }

    return [maxCount, minCount]

};


console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))

