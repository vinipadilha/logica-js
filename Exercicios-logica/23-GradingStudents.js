function gradingStudents(grades) {
    // Write your code here
    let notas = [];
    let sobra = 0;
    let valorFinal = 0;
    

    for (let i = 0; i < grades.length; i++) {
        
        if(grades[i] < 38 || grades[i] % 5 === 0){
            notas.push(grades[i])

        } else {
            sobra = grades[i] % 5 
            valorFinal = grades[i] + sobra
            notas.push(valorFinal)

        }
        
    }
    return notas

}


console.log(gradingStudents([73, 67, 38, 33]))


