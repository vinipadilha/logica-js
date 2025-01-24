function migratoryBirds(arr) {
    // Write your code here
    let counts = {};

    arr.forEach((count) => {
        counts[count] = (counts[count] || 0) + 1;
        
    });
    
    return counts;
}


console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
