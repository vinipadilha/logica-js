

function breakingRecords(scores) {
    // Write your code here
    let min = scores[0]
    let max = scores[0]

    for(let index = 1; index < scores.lenght; index += 1){

        if(scores[index] > max) {
            max++
        } else if(scores[index] < min){
            min++
        } 

    }

    return max, min

};


console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))

