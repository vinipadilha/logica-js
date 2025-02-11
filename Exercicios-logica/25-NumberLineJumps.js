function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let response = 'NO'
    
    for (let index = 0; index < 10000; index++) {
        
        x1 += v1
        x2 += v2

        if (x1 == x2) {
            response = 'YES'  
        } 
    }
    return response;

};

console.log(kangaroo(0, 2, 5, 3))
console.log(kangaroo(0, 3, 4, 2))
