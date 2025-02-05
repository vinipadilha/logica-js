function bonAppetit(bill, k, b){
    let soma = 0

    bill.forEach(preco => {
        soma += preco - bill[k]
        
    });

    if(soma == b){
        return "Bon Apetit"
    } else {
        return b - soma
    }
    
}



bonApetit([3, 10, 2, 9], 1 ,12)
