function gradingStudents(grades) {
    let notas = [];

    for (let i = 0; i < grades.length; i++) {
        let nota = grades[i];

        if (nota < 38) {
            notas.push(nota); 
        } else {
            let sobra = nota % 5;
            if (sobra >= 3) {
                nota += (5 - sobra);
            }
            notas.push(nota);
        }
    }

    return notas;
}

console.log(gradingStudents([73, 67, 38, 33]))


