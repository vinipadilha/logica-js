function staircase(n) {
    // Write your code here
    let symbol = '#';
    let inputLine = '';
    let inputPosition = n - 1

    for(let lineIndex = 0; lineIndex < n ; lineIndex++){
        
        for(let columnIndex = 0; columnIndex < n; columnIndex++){
            if(columnIndex < inputPosition){
                inputLine += ' '; 
            } else {
                inputLine += symbol;
            }
        }
        console.log(inputLine);
        inputLine = '';
        inputPosition -= 1
    }
    
} 

staircase(10)



