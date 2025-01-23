function migratoryBirds(arr) {
    // Write your code here
    let counts = {};

    arr.forEach((count) => {
        counts[count] = (counts[count] || 0) + 1;
        
    });

    const maxVal = Math.max(...Object.values(counts));

    const num = Object.keys(counts).find((key) => {
       return counts[key] === maxVal;
    });
    
    return num;
}


console.log(migratoryBirds([1, 4, 4, 4, 5, 3, 3, 3, 3]));
