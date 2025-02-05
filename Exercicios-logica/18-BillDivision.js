function bonAppetit(bill, k, b){
    let soma = 0;
    let precoFinal = 0;

    bill.forEach(valor => soma += valor);
    soma = soma - bill[k]
    precoFinal = soma / 2

    if (precoFinal != b) {
        console.log( b - precoFinal)
    } else{
        console.log("Bon Appetit")
    }
}



bonApetit([3, 10, 2, 9], 1 ,12)
