function aVeryBigSum(ar) {
    // Write your code here
    soma = 0

    for (index = 0; index < ar.length; index++){
        soma = soma + ar[index]
    }

    return soma
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))

