let arrayA = [12, 20, 24, 35, 39, 44, 52, 56, 89, 90];
let arrayB = [14, 16, 20, 29, 20, 44, 89, 62, 90, 72];

function comuns(array1, array2) {
    let resultado = []
    let contadorResultado = 0

    for (let i = 0; i < arrayA.length; i++) {
        // passa pelo primeiro array
        
        for (let a = 0; a < arrayB.length; a++) {
            // passa pelo segundo array

            if (array1[i] == array2[a]) {
                resultado[contadorResultado] = array1[i]
                contadorResultado++

                a = arrayB.length 
                // atribui o valor máximo a 'i', assim evitamos números duplicados
                
            }
        }   
    }

    return resultado

} 

console.log(comuns(arrayA, arrayB))
